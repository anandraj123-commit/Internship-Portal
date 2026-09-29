import Root from "../../components/Root";
import ListingPage from "../../components/services/ListingPage";
import ListingStyles from "../../components/services/ListingStyles";

export default function Services() {
  return (
    <Root
      pageKey="services"
      Styles={ListingStyles}
      title="Our Services | IT Agency"
    >
      <ListingPage />
    </Root>
  );
}
