const facts = [["45k+", "Happy Clients"], ["24", "Awards"], ["80%", "Increase in organic traffic"], ["22+", "Worldwide branches"]];
const testimonials = [
  ["Best Service providing agency in town", "We easily and quickly received the money from the consumers grow Radhika SkillForge. After using our service, as well as communication.", "Steve Behunin", "Senior Consultant"],
  ["The benefits of local SEO for small business", "We easily and quickly received the money from the consumers grow Radhika SkillForge. After using our service, as well as communication.", "Michel Fix", ""],
  ["Perfect from beginning to end faster", "We easily and quickly received the money from the consumers grow Radhika SkillForge. After using our service, as well as communication.", "Pepe Charles", "Executive Consultants"],
];
export default function HomeProof() {
  return <>
    <section className="home-facts home-section" aria-label="Company facts"><div className="home-container home-facts-grid">{facts.map(([value,label])=><div className="home-fact" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="home-testimonials home-section" aria-labelledby="home-testimonials-title"><div className="home-container"><div className="home-section-heading"><div><p className="home-eyebrow">Client perspectives</p><h2 id="home-testimonials-title">Good work is a <span>team effort.</span></h2></div><a className="home-text-link" href="/testimonial">Read all testimonials <span>↗</span></a></div><div className="home-quote-grid">{testimonials.map(([title,copy,name,role],index)=><figure className={`home-quote home-quote-${index+1}`} key={name}><span className="home-quote-mark" aria-hidden="true">“</span><blockquote><h3>{title}</h3><p>{copy}</p></blockquote><figcaption><span className="home-quote-initials" aria-hidden="true">{name.split(" ").map(part=>part[0]).join("")}</span><span><b>{name}</b>{role && <small>{role}</small>}</span></figcaption></figure>)}</div></div></section>
  </>;
}
