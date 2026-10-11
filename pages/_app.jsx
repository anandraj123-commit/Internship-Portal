import "../styles/brand.css";
import WhatsAppButton from "../components/WhatsAppButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
