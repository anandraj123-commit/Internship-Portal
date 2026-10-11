import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href="https://wa.me/918797044416"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Radhika SkillForge on WhatsApp at +91 8797044416"
      title="WhatsApp: +91 8797044416"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
