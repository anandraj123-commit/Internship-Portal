import Root from "../components/Root";
import TestimonialPage from "../components/testimonial/Page";
import PageStyles from "../components/testimonial/PageStyles";

export default function Testimonial() {
  return (
    <Root
      pageKey="testimonial"
      Styles={PageStyles}
      title="Testimonial – Radhika SkillForge"
    >
      <TestimonialPage />
    </Root>
  );
}
