import Root from "../components/Root";
import Header from "../components/Header";
import HomePage from "../components/home/Page";
import PageStyles from "../components/home/PageStyles";

export default function Home() {
  return (
    <Root pageKey="home" Styles={PageStyles}>
      <HomePage header={<Header />} />
    </Root>
  );
}
