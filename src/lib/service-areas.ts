export const serviceAreas = [
  'Şişli', 'Fulya', 'Levent', 'Etiler', 'Bebek', 'Maslak', 'Harbiye', 'Taksim',
  'Ortaköy', 'Bomonti', 'Osmanbey', 'Pangaltı', 'Beşiktaş', 'Çağlayan',
  'Gayrettepe', 'Kağıthane', 'Nişantaşı', 'Okmeydanı', 'Mecidiyeköy',
].map((name) => ({
  name,
  slug: name.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  description: `${name} ve çevresinde yeminli, noter onaylı ve profesyonel tercüme desteği.`,
}));

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
