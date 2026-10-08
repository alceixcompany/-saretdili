import { Text, LocalizedLink as Link } from "./LanguageProvider";
import { FiArrowUpRight, FiCheck, FiUsers, FiBriefcase, FiFileText, FiVideo } from "react-icons/fi";
import { pageCopy as copy } from "@/lib/tid-page-content";
import { tidServices } from "@/lib/tid";

function InformationHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="tid-information-heading">
      <span className="tid-eyebrow"><Text>{label}</Text></span>
      <h2><Text>{title}</Text></h2>
      {intro && <p><Text>{intro}</Text></p>}
    </div>
  );
}

export function TidSituations() {
  const items = [
    { title: copy.personalTitle[0], text: copy.personalText[0], icon: FiUsers },
    { title: copy.corporateTitle[0], text: copy.corporateText[0], icon: FiBriefcase },
    { title: copy.officialTitle[0], text: copy.officialText[0], icon: FiFileText },
    { title: copy.remoteTitle[0], text: copy.remoteText[0], icon: FiVideo },
  ];
  return (
    <section className="tid-section tid-information-tinted">
      <div className="tid-container">
        <InformationHeading label={copy.situationsLabel[0]} title={copy.situationsTitle[0]} intro={copy.situationsIntro[0]} />
        <div className="tid-information-grid">
          {items.map(({ title, text, icon: Icon }) => (
            <article className="tid-information-card" key={title}>
              <Icon className="tid-information-icon" aria-hidden="true" />
              <h3><Text>{title}</Text></h3>
              <p><Text>{text}</Text></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TidMeetingFormats() {
  return (
    <section className="tid-section">
      <div className="tid-container">
        <InformationHeading label={copy.formatsLabel[0]} title={copy.formatsTitle[0]} />
        <div className="tid-information-grid">
          <article className="tid-information-card tid-format-card">
            <span className="tid-information-number" aria-hidden="true">01</span>
            <h3><Text>{copy.inPersonTitle[0]}</Text></h3>
            <p><Text>{copy.inPersonText[0]}</Text></p>
          </article>
          <article className="tid-information-card tid-format-card">
            <span className="tid-information-number" aria-hidden="true">02</span>
            <h3><Text>{copy.onlineTitle[0]}</Text></h3>
            <p><Text>{copy.onlineText[0]}</Text></p>
          </article>
        </div>
        <p className="tid-information-note"><Text>{copy.formatsNote[0]}</Text></p>
      </div>
    </section>
  );
}

export function TidPurpose() {
  return (
    <section className="tid-section">
      <div className="tid-container">
        <InformationHeading label={copy.purposeLabel[0]} title={copy.purposeTitle[0]} intro={copy.purposeIntro[0]} />
        <div className="tid-information-grid">
          {[{ title: copy.missionTitle[0], text: copy.missionText[0] }, { title: copy.visionTitle[0], text: copy.visionText[0] }].map(({ title, text }) => (
            <article className="tid-information-card" key={title}>
              <h3><Text>{title}</Text></h3>
              <p><Text>{text}</Text></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TidWorkingPrinciples() {
  const items = [
    { title: copy.preferencesTitle[0], text: copy.preferencesText[0] },
    { title: copy.preparationTitle[0], text: copy.preparationText[0] },
    { title: copy.privacyTitle[0], text: copy.privacyText[0] },
    { title: copy.clarityTitle[0], text: copy.clarityText[0] },
  ];
  return (
    <section className="tid-section tid-information-tinted">
      <div className="tid-container">
        <InformationHeading label={copy.approachLabel[0]} title={copy.approachTitle[0]} intro={copy.approachIntro[0]} />
        <div className="tid-information-grid">
          {items.map(({ title, text }, index) => (
            <article className="tid-information-card" key={title}>
              <span className="tid-information-number" aria-hidden="true">0{index + 1}</span>
              <h3><Text>{title}</Text></h3>
              <p><Text>{text}</Text></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TidServicesIntroduction() {
  return (
    <InformationHeading label={copy.scopeLabel[0]} title={copy.servicesIntroTitle[0]} intro={copy.servicesIntroText[0]} />
  );
}

export function TidServiceScope() {
  const descriptions = [copy.signScope[0], copy.swornScope[0], copy.notaryScope[0]];
  return (
    <section className="tid-section tid-information-tinted">
      <div className="tid-container">
        <InformationHeading label={copy.scopeLabel[0]} title={copy.scopeTitle[0]} />
        <div className="tid-scope-list">
          {tidServices.map((service, index) => (
            <article className="tid-scope-row" key={service.slug}>
              <div>
                <span className="tid-information-number" aria-hidden="true">{service.number}</span>
                <h3><Text>{service.title}</Text></h3>
                <Link href={`/hizmetlerimiz/${service.slug}`} className="tid-text-link"><Text>{copy.scopeLink[0]}</Text><FiArrowUpRight /></Link>
              </div>
              <div>
                <p><Text>{descriptions[index]}</Text></p>
                <ul className="tid-check-list">
                  {service.highlights.map((highlight) => <li key={highlight}><FiCheck aria-hidden="true" /><Text>{highlight}</Text></li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TidRequestPreparation() {
  const items = [
    { title: copy.topicTitle[0], text: copy.topicText[0] },
    { title: copy.timingTitle[0], text: copy.timingText[0] },
    { title: copy.settingTitle[0], text: copy.settingText[0] },
    { title: copy.needsTitle[0], text: copy.needsText[0] },
  ];
  return (
    <section className="tid-section">
      <div className="tid-container">
        <InformationHeading label={copy.requestLabel[0]} title={copy.requestTitle[0]} intro={copy.requestIntro[0]} />
        <ol className="tid-preparation-grid">
          {items.map(({ title, text }, index) => (
            <li key={title}>
              <span className="tid-information-number" aria-hidden="true">0{index + 1}</span>
              <h3><Text>{title}</Text></h3>
              <p><Text>{text}</Text></p>
            </li>
          ))}
        </ol>
        <p className="tid-information-note"><Text>{copy.requestNote[0]}</Text></p>
      </div>
    </section>
  );
}
