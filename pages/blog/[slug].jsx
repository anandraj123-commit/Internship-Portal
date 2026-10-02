import Root from "../../components/Root";
import PostPage from "../../components/post/Page";
import PageStyles from "../../components/post/PageStyles";
import data from "../../data/blogs.json";
export default function SinglePost({ title }) {
  return (
    <Root pageKey="post" Styles={PageStyles} title={`${title} – Radhika SkillForge`}>
      <PostPage />
    </Root>
  );
}
export function getServerSideProps({ params }) {
  const post = data.posts.find((item) => item.slug === params.slug);
  if (!post) return { notFound: true };
  return { props: { title: post.title } };
}
