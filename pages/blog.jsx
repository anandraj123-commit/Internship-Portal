import Root from "../components/Root";
import BlogPage from "../components/blog/Page";
import PageStyles from "../components/blog/PageStyles";
export default function Blog() {
  return (
    <Root pageKey="blog" Styles={PageStyles} title="Student Internship & Career Blog | Radhika SkillForge">
      <BlogPage />
    </Root>
  );
}
// Render query-based search, category filters, and pagination on the first request.
export function getServerSideProps() {
  return { props: {} };
}
