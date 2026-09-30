import Root from "../../components/Root";
import CategoryPage from "../../components/category/Page";
import PageStyles from "../../components/category/PageStyles";
import data from "../../data/blogs.json";

export default function Category({ name }) {
  return (
    <Root pageKey="category" Styles={PageStyles} title={`${name} – IT Agency`}>
      <CategoryPage />
    </Root>
  );
}
export function getServerSideProps({ params }) {
  const category = data.categories.find((item) => item.slug === params.slug);
  if (!category) return { notFound: true };
  return { props: { name: category.name } };
}
