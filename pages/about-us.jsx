import Root from "../components/Root";
import Header from "../components/Header";
import AboutPage from "../components/about/Page";
import PageStyles from "../components/about/PageStyles";

export default function AboutUs() {
  return (
    <Root pageKey="about" Styles={PageStyles}>
      <AboutPage header={<Header />} />
    </Root>
  );
}
