import Root from "../../components/Root";
import CategoryPage from "../../components/category/Page";
import PageStyles from "../../components/category/PageStyles";
import data from "../../data/blogs.json";

export default function Category({ name, description, canonicalPath, image }) {
  return (
    <Root
      pageKey="category"
      Styles={PageStyles}
      title={`${name} Guides for Students | Radhika SkillForge`}
      description={description}
      canonicalPath={canonicalPath}
      image={image}
    >
      <CategoryPage />
    </Root>
  );
}
export function getServerSideProps({ params }) {
  const category = data.categories.find((item) => item.slug === params.slug);
  if (!category) return { notFound: true };
  const categoryPosts = data.posts.filter((post) =>
    post.categories.includes(category.id),
  );
  return {
    props: {
      name: category.name,
      description: `Read ${category.name.toLowerCase()} guides and practical tips for college students exploring internships with Radhika SkillForge.`,
      canonicalPath: `/category/${category.slug}`,
      image: categoryPosts[0]?.image || "/images/internship-career-prep.jpg",
    },
  };
}
