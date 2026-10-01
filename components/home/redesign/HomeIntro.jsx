export default function HomeIntro() {
  return (
    <section className="home-intro home-section" aria-labelledby="home-intro-title">
      <div className="home-container home-intro-grid">
        <div className="home-section-index"><span>02</span><i /></div>
        <div className="home-intro-heading"><p className="home-eyebrow">A clear path from idea to impact</p><h2 id="home-intro-title">Good technology starts with understanding the problem.</h2></div>
        <div className="home-intro-copy"><p>Strategy, planning, analysis and research make better work possible. We bring those parts together to shape digital experiences around real needs.</p><a className="home-text-link" href="/about-us">Get to know us <span>↗</span></a></div>
      </div>
      <div className="home-container home-principles" aria-label="Our approach">
        {[['01','Strategy','Find the right problem to solve.'],['02','Planning','Give good ideas a clear direction.'],['03','Analysis','Make decisions with purpose.'],['04','Research','Build with people in mind.']].map(([number,title,copy])=><article className="home-principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><i aria-hidden="true">↗</i></article>)}
      </div>
    </section>
  );
}
