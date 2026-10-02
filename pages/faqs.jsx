import Root from "../components/Root";
import FaqsPage from "../components/faqs/Page";
import PageStyles from "../components/faqs/PageStyles";

export default function Faqs() {
  return (
    <Root pageKey="faqs" Styles={PageStyles} title="FAQs – Radhika SkillForge">
      <FaqsPage />
    </Root>
  );
}
