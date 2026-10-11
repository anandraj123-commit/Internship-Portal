import "../styles/brand.css";
import WhatsAppButton from "../components/WhatsAppButton";
import FormSubmissionGuard from "../components/FormSubmissionGuard";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FormSubmissionGuard />
      <WhatsAppButton />
    </>
  );
}
