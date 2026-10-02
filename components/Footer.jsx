import { useState } from "react";
import styles from "./Footer.module.css";

const usefulLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Maintenance & Support", "/contact-us"],
  ["Blogs", "/blog"],
  ["Internship", "/apply-job"],
];

const services = [
  ["Software Development", "/service"],
  ["SPA Development", "/service"],
  ["PWA Applications", "/service"],
  ["Cloud Solutions", "/service"],
  ["Cyber Security", "/service"],
  ["Digital Marketing", "/service"],
];

const socialLinks = [
  ["X", null],
  ["Facebook", "fab fa-facebook-f"],
  ["Instagram", "fab fa-instagram"],
  ["LinkedIn", "fab fa-linkedin-in"],
  ["YouTube", "fab fa-youtube"],
];

function FooterLinks({ title, links }) {
  return (
    <nav aria-label={title}>
      <h3>{title}</h3>
      <ul className={styles.links}>
        {links.map(([name, href]) => (
          <li key={name}>
            <a href={href}><span className={styles.chevron} aria-hidden="true">›</span><span>{name}</span></a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const [message, setMessage] = useState("");
  function handleSubscribe(event) {
    event.preventDefault();
    setMessage("Newsletter signup is not available yet. Please contact supports@apurvasoftwaresolutions.com for updates.");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <section className={styles.company} aria-label="Company details">
            <h2>Radhika SkillForge</h2>
            <p className={styles.parentCompany}><strong>Parent Company:</strong> Apurva Software Solutions</p>
            <address>
              <p>Veer Kuwar Singh Colony</p>
              <p>Gaya, Bihar</p>
              <div className={styles.contact}>
                <p><strong>Phone:</strong> <a href="tel:+916203253537">+91 6203253537</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/918797044416" target="_blank" rel="noopener noreferrer">+91 8797044416</a></p>
                <p><strong>Email:</strong> <a className={styles.email} href="mailto:supports@apurvasoftwaresolutions.com">supports@apurvasoftwaresolutions.com</a></p>
              </div>
            </address>
            <div className={styles.socials} aria-label="Social profiles">
              {socialLinks.map(([label, icon]) => (
                <span key={label} className={styles.social} role="img" aria-label={`${label} — profile link coming soon`} title={`${label} — profile link coming soon`}>
                  {icon ? <i className={icon} aria-hidden="true" /> : <span aria-hidden="true">𝕏</span>}
                </span>
              ))}
            </div>
          </section>
          <FooterLinks title="Useful Links" links={usefulLinks} />
          <FooterLinks title="Our Services" links={services} />
          <section className={styles.newsletter} aria-labelledby="footer-newsletter-title">
            <h3 id="footer-newsletter-title">Stay Ahead with Radhika SkillForge</h3>
            <p>Subscribe to receive the latest updates on software development, PWA solutions, SPA performance, and digital innovation.</p>
            <form onSubmit={handleSubscribe} style={{background:'white'}}>
              <label className={styles.srOnly} htmlFor="footer-email">Your email address</label>
              <input id="footer-email" type="email" name="email" autoComplete="email" required placeholder="Your Email" aria-describedby={message ? "footer-newsletter-message" : undefined} />
              <button type="submit">Subscribe</button>
            </form>
            <p id="footer-newsletter-message" className={styles.message} role="status">{message}</p>
          </section>
        </div>
        <div className={`${styles.divider} ${styles.expertise}`}>
          <p><strong>Expertise:</strong> Software Development Company in India • Custom Software Development Services • Enterprise Software Solutions • Scalable Software Development • Cost-Effective Software Solutions • Agile Software Development • End-to-End Software Development • Secure Software Development • Software Development for Startups • PWA Development • SPA Development • Cloud Solutions • Mobile App Development • Web Application Development • React.js Development • Angular Development • Next.js Development • Node.js Backend Development • MongoDB &amp; MySQL Database Solutions • MERN &amp; MEAN Stack Development • Microservices Architecture • API Development Services • UI/UX Design • SEO-Friendly Development • Digital Transformation Services</p>
        </div>
        <div className={styles.divider}>
          <p><strong>Why Choose Radhika SkillForge:</strong> Trusted Software Development Company in India • Pan-India Software Development Services • Serving Clients Across India • Software Development Company Based in Gaya, Bihar • Reliable IT Partner for Startups &amp; MSMEs • Affordable Software Development Services in India • Startup-Friendly Development Approach • Scalable Software Architecture • Secure &amp; Robust Application Development • Performance-Optimized Web Applications • Mobile-First &amp; Responsive Design • Custom Business Applications • Cloud-Based Application Development • Full Stack Development Services • Software Maintenance &amp; Support • Digital Transformation Services</p>
        </div>
        <div className={`${styles.divider} ${styles.copyright}`}>
          <p>© {new Date().getFullYear()} Radhika SkillForge. All rights reserved.</p>
          <div className={styles.legal}>
            <span title="Privacy policy page coming soon">Privacy Policy</span>
            <span title="Terms page coming soon">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
