export default function HomeProcess() {
  return (
    <section className="home-process home-section" aria-labelledby="home-process-title">
      <div className="home-container home-process-grid">
        <div className="home-process-intro"><p className="home-eyebrow">How we work</p><h2 id="home-process-title">A thoughtful process. A useful result.</h2><p>Four simple stages keep the work clear, collaborative and moving in the right direction.</p><a className="home-button home-button-dark" href="/contact-us">Let’s talk <span>↗</span></a></div>
        <div className="home-process-list">{[['01','Research','Listen closely, understand the context, and ask better questions.'],['02','Analysis','Find the signal in the details and define what success means.'],['03','Planning','Agree on a clear approach, priorities, and next steps.'],['04','Delivery','Design, build, and refine the solution together.']].map(([number,title,copy])=><article className="home-process-step" key={number}><span className="home-process-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="home-process-arrow" aria-hidden="true">↗</span></article>)}</div>
      </div>
    </section>
  );
}
