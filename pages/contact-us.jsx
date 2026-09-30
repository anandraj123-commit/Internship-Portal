import Root from "../components/Root";
import ContactPage from "../components/contact/Page";
import PageStyles from "../components/contact/PageStyles";

export default function ContactUs() {
  return (
    <Root pageKey="contact" Styles={PageStyles} title="Contact Us – IT Agency">
      <ContactPage />
    </Root>
  );
}
