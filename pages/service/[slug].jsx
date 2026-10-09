import Root from "../../components/Root";
import DetailPage from "../../components/services/DetailPage";
import DetailStyles from "../../components/services/DetailStyles";
import { services, getService } from "../../data/services";

export default function ServiceDetails({ service }) {
  return (
    <Root
      pageKey="serviceDetail"
      Styles={DetailStyles}
      title={service.seo.title}
      description={service.seo.description}
    >
      <DetailPage service={service} />
    </Root>
  );
}

export function getStaticPaths() {
  return {
    paths: services.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const service = getService(params.slug);
  return service ? { props: { service } } : { notFound: true };
}
