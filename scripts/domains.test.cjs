const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
function loadTs(relative) {
  const filename = path.resolve(__dirname, '..', relative);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true}}).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  const original = loaded.require.bind(loaded);
  loaded.require = name => {
    const target = name.startsWith('@/') ? path.resolve(__dirname, '../src', name.slice(2) + '.ts') : path.resolve(path.dirname(filename), name + '.ts');
    return (name.startsWith('.') || name.startsWith('@/')) && fs.existsSync(target) ? loadTs(path.relative(path.resolve(__dirname, '..'), target)) : original(name);
  };
  loaded._compile(code, filename);
  return loaded.exports;
}
const { defaultSiteConfig, getSiteConfigByHost, getAllSiteConfigs, normalizeHost } = loadTs('src/lib/domain-seo.ts');
const { domainProfiles, getDomainProfile, documentServices, domainTranslations } = loadTs('src/lib/domain-content.ts');
const { translate } = loadTs('src/lib/tid-i18n.ts');
const { createSeoMetadata } = loadTs('src/lib/seo.ts');
test('all five domains and their www aliases resolve to distinct profiles and trusted canonical origins', () => {
  assert.equal(Object.keys(domainProfiles).length, 5);
  const origins = new Set();
  for (const [id, profile] of Object.entries(domainProfiles)) {
    for (const host of [profile.host, `www.${profile.host}`, ` WWW.${profile.host.toUpperCase()}:443 `, `${profile.host}, proxy.internal`]) {
      const site = getSiteConfigByHost(host);
      assert.equal(site.profileId, id);
      assert.equal(site.url, profile.url);
      assert.equal(site.description, getDomainProfile(id).description);
      assert.ok(!site.keywords.some(word => word.includes('işaret')));
      origins.add(site.url);
    }
  }
  assert.equal(origins.size, 5);
  assert.equal(getAllSiteConfigs().length, 6);
  assert.equal(normalizeHost(' WWW.APOSTILISLEMLERI.NET:443 '), 'apostilislemleri.net');
});
test('unknown or forged hosts never become canonical origins; switching domains does not change later results', () => {
  for (const host of [undefined, '', 'evil.example', 'apostilislemleri.net.evil.example', 'https://apostilislemleri.net', 'constructor', '__proto__']) {
    assert.equal(getSiteConfigByHost(host).url, defaultSiteConfig.url);
    assert.equal(getSiteConfigByHost(host).profileId, undefined);
  }
  for (const id of ['apostille', 'notary', 'apostille']) {
    const profile = domainProfiles[id];
    const site = getSiteConfigByHost(profile.host);
    const metadata = createSeoMetadata({title: 'Hizmetlerimiz', description: site.description, path: '/hizmetlerimiz', site});
    assert.equal(metadata.alternates.canonical, profile.url + '/hizmetlerimiz');
    assert.equal(metadata.openGraph.url, profile.url + '/hizmetlerimiz');
    assert.equal(metadata.robots.index, true);
    assert.ok(!metadata.keywords.includes('türk işaret dili'));
  }
});
test('every domain points to real document service pages, never sign-language services', () => {
  const slugs = new Set(documentServices.map(service => service.slug));
  for (const profile of Object.values(domainProfiles)) {
    assert.ok(slugs.has(profile.service));
    assert.equal(new Set(profile.related).size, 3);
    assert.ok(profile.related.every(slug => slugs.has(slug)));
  }
});
test('new domain content has complete translations in all four additional languages', () => {
  assert.ok(Object.keys(domainTranslations).length > 40);
  for (const [source, row] of Object.entries(domainTranslations)) {
    assert.equal(row.length, 4, source);
    for (const [index, locale] of ['en', 'de', 'ar', 'ru'].entries()) {
      assert.ok(row[index].trim().length > 0, source);
      assert.equal(translate(source, locale), row[index], `${locale}: ${source}`);
      assert.notEqual(row[index], source, `${locale}: ${source}`);
    }
  }
});
test('domain hero and service photos exist and use different assets in every placement', () => {
  const images = [...Object.values(domainProfiles).map(profile => profile.image), ...documentServices.map(service => service.image)];
  assert.equal(new Set(images).size, images.length);
  for (const image of images) assert.ok(fs.existsSync(path.resolve(__dirname, '../public' + image)), image);
  const seed = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/tid-editorial-content.json'), 'utf8'));
  for (const article of [...seed.news, ...seed.blog]) {
    for (const field of ['imageUrl', 'heroImageUrl', 'homeImageUrl']) assert.ok(!images.includes(article[field]));
  }
});
