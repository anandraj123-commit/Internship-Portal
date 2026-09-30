import { useRouter } from "next/router";
import data from "../../data/blogs.json";
export default function usePost() {
  const { query } = useRouter();
  return data.posts.find((post) => post.slug === query.slug);
}
