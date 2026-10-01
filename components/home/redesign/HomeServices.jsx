import { services } from "../../../data/services.js";

const marks = ["↗", "✳", "⌁", "▧", "◉", "✳"];
const descriptions = [
  "Mobile experiences designed around the people who use them.",
  "A distinct identity, brought to life through motion and design.",
  "Search strategy that helps the right audience find you.",
  "Research-led interfaces and digital product experiences.",
  "Clear, thoughtful design for mobile applications.",
  "Visual systems, brand worlds and considered illustration.",
];

export default function HomeServices() {
  return (
    <section className="home-services home-section" id="home-services" aria-labelledby="home-services-title">
      <div className="home-container">
        <div className="home-section-heading home-services-heading"><div><p className="home-eyebrow">What we do</p><h2 id="home-services-title">The right expertise.<br /><span>In one connected team.</span></h2></div><p>From the first question to the final detail, bring the capabilities you need together under one roof.</p></div>
        <div className="home-service-grid">
          {services.map((service,index)=><a className={`home-service home-service-${index+1}`} href={`/service/${service.slug}`} key={service.slug}><div className="home-service-top"><span className="home-service-number">0{index+1}</span><span className="home-service-mark" aria-hidden="true">{marks[index]}</span></div><div className="home-service-bottom"><h3>{service.title}</h3><p>{descriptions[index]}</p><span className="home-service-link">Explore service <b aria-hidden="true">↗</b></span></div></a>)}
        </div>
        <div className="home-services-more"><span>Have a specific challenge in mind?</span><a className="home-text-link" href="/contact-us">Tell us about it <span>↗</span></a></div>
      </div>
    </section>
  );
}
