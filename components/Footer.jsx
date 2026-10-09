import { useState } from "react";
import styles from "./Footer.module.css";
import { services } from "../data/services";

const usefulLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Blogs", "/blog"],
  ["Internship", "/apply-job"],
];

const internships = services.map(({ title, slug }) => [title, `/service/${slug}`]);

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
            <p className={styles.parentCompany}><strong>An initiative of</strong> Apurva Software Solutions</p>
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
          <FooterLinks title="Our Internship" links={internships} />
          <section className={styles.newsletter} aria-labelledby="footer-newsletter-title">
            <h3 id="footer-newsletter-title">Stay Ahead with Radhika SkillForge</h3>
            <p>Receive updates on internship opportunities, practical training, mentor guidance and project-based learning.</p>
            <form onSubmit={handleSubscribe} style={{background:'white'}}>
              <label className={styles.srOnly} htmlFor="footer-email">Your email address</label>
              <input id="footer-email" type="email" name="email" autoComplete="email" required placeholder="Your Email" aria-describedby={message ? "footer-newsletter-message" : undefined} />
              <button type="submit">Subscribe</button>
            </form>
            <p id="footer-newsletter-message" className={styles.message} role="status">{message}</p>
          </section>
        </div>
        <div className={`${styles.divider} ${styles.expertise}`}>
          <p><strong>Expertise:</strong> Web Development • Frontend Development • Backend Development • Full-Stack Development • Mobile Application Development • Digital Marketing • Other IT and technology-related fields</p>
        </div>
        <div className={styles.divider}>
          <p><strong>Why Choose Radhika SkillForge:</strong> Practical and Industry-Focused Training: Gain practical knowledge through structured learning, assignments and project-based activities. • Mentor Guidance and Doubt Support: Receive guidance and support from mentors throughout the applicable training or internship programme. • Assignments and Project-Based Learning: Work on practical assignments and projects designed to strengthen your skills and understanding. • Internship Completion Certificate: Eligible students who successfully complete the applicable programme requirements may receive an internship completion certificate. • Academic Internship Support: Support is available for students who need to fulfil applicable academic internship requirements, subject to programme requirements. • Suitable for Beginners: Students can explore suitable domains even if they are at the beginning of their technical learning journey. • Online Participation: Online participation is available for students across India.</p>
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
