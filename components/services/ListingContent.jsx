import ServiceGrid from "./ServiceGrid";
import SpacerSection from "./SpacerSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
export default function ListingContent({ service }) {
  return (
    <>
      <div id={"pxl-main"}>
        <div className={"elementor-container"}>
          <div className={"row pxl-content-wrap no-sidebar"}>
            <div
              id={"pxl-content-area"}
              className={"pxl-content-area pxl-content-page col-12"}
            >
              <main id={"pxl-content-main"}>
                <article
                  id={"pxl-post-1135"}
                  className={"post-1135 page type-page status-publish hentry"}
                >
                  <div className={"pxl-entry-content clearfix"}>
                    <div
                      data-elementor-type={"wp-page"}
                      data-elementor-id={"1135"}
                      className={"elementor elementor-1135"}
                    >
                      <ServiceGrid />
                      <SpacerSection />
                      <TestimonialsSection />
                      <BlogSection />
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
