export default function HomeHero() {
  return (
    <section className="home-hero" id="top" aria-labelledby="home-title">
      <div className="home-container home-hero-grid">
        <div className="home-hero-copy">
          <p className="home-eyebrow"><span /> Strategy · Design · Engineering</p>
          <h1 id="home-title">Technology built around what your business needs next.</h1>
          <p className="home-lede">
            From product design and mobile applications to branding and international SEO,
            bring your next digital idea to life with Radhika SkillForge.
          </p>
          <div className="home-actions">
            <a className="home-button home-button-primary" href="/contact-us">Start a conversation <span aria-hidden="true">↗</span></a>
            <a className="home-button home-button-quiet" href="/service">Explore services <span aria-hidden="true">↓</span></a>
          </div>
          <div className="home-hero-footnote"><span className="home-live-dot" /> Gaya, Bihar <span className="home-footnote-divider" /> Working worldwide</div>
        </div>
        <div className="home-hero-art" aria-label="A visual map of a digital product journey">
          <div className="home-art-orbit home-art-orbit-one" />
          <div className="home-art-orbit home-art-orbit-two" />
          <div className="home-art-cross home-art-cross-one" />
          <div className="home-art-cross home-art-cross-two" />
          <div className="home-art-index">01 <span>—</span> DIGITAL, MADE USEFUL</div>
          <div className="home-product-window">
            <div className="home-window-bar"><span /><span /><span /><b>product / overview</b><i>•••</i></div>
            <div className="home-window-content">
              <div className="home-window-rail"><strong>IA</strong><span className="active" /><span /><span /><span /></div>
              <div className="home-window-main">
                <div className="home-window-heading"><div><small>MONDAY, 09:41</small><h2>Make the next move.</h2></div><div className="home-avatar-stack"><i>●</i><i>●</i><i>+</i></div></div>
                <div className="home-window-feature"><div className="home-feature-lines"><span /><span /><span /></div><div className="home-feature-shape"><i /><b /></div></div>
                <div className="home-window-cards"><div><small>01 / DISCOVER</small><b>Understand</b></div><div><small>02 / CREATE</small><b>Design</b></div><div><small>03 / DELIVER</small><b>Build</b></div></div>
              </div>
            </div>
          </div>
          <div className="home-art-note"><span>↗</span><div><b>Thoughtful by design.</b><small>Useful at every step.</small></div></div>
          <div className="home-art-coordinate">23°01' N<br />72°34' E</div>
        </div>
      </div>
      <div className="home-hero-bottom"><div className="home-container"><span>Ideas into outcomes</span><div><i /> Strategy <i /> Product <i /> Technology <i /> Growth</div><a href="#home-services" aria-label="Scroll to services">↓</a></div></div>
    </section>
  );
}
