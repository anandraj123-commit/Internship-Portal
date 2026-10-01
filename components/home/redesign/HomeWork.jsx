const projects = ["Marketing Advisor", "SEO Optimization", "Business Growth", "Digital Analysis", "Data Analytics", "Graphics Design"];
export default function HomeWork() {
  return (
    <section className="home-work home-section" aria-labelledby="home-work-title">
      <div className="home-container">
        <div className="home-section-heading"><div><p className="home-eyebrow">Selected capabilities</p><h2 id="home-work-title">Different challenges.<br /><span>One thoughtful approach.</span></h2></div><a className="home-text-link" href="/service">Explore services <span>↗</span></a></div>
        <div className="home-work-grid">{projects.map((project,index)=><a href="/service" className={`home-work-item home-work-item-${index+1}`} key={project}><span className="home-work-count">0{index+1} / CAPABILITY</span><span className="home-work-shape" aria-hidden="true"><i /><b /><em /></span><h3>{project}</h3><span className="home-work-open" aria-hidden="true">↗</span></a>)}</div>
      </div>
    </section>
  );
}
