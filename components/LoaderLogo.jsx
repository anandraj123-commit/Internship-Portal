export const brandLogo = "/wp-content/themes/saira/assets/img/logo.jpg";

export default function LoaderLogo() {
  return (
    <img
      className="loader-brand-image"
      src={brandLogo}
      alt="Radhika SkillForge"
      width="480"
      height="480"
    />
  );
}
