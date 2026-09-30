import ArchiveLayout from "../blog/PageContent";
import Article from "./Article";
import Comments from "./Comments";
export default function PageContent() {
  return (
    <ArchiveLayout>
      <Article />
      <Comments />
    </ArchiveLayout>
  );
}
