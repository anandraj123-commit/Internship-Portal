import IntroductionSection from "./IntroductionSection";
import ServicesSection from "./ServicesSection";
import FunFactsSection from "./FunFactsSection";
import InternshipDomainsSection from "../home/CaseStudiesSection";
export default function PageContent() {
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
                  id={"pxl-post-1133"}
                  className={"post-1133 page type-page status-publish hentry"}
                >
                  <div className={"pxl-entry-content clearfix"}>
                    <div
                      data-elementor-type={"wp-page"}
                      data-elementor-id={"1133"}
                      className={"elementor elementor-1133"}
                    >
                      <IntroductionSection />
                      <ServicesSection />
                      <FunFactsSection />
                      <div className="about-internship-domains">
                        <InternshipDomainsSection />
                      </div>
                      <style>{`
                        .about-internship-domains .pxl-post-content .pxl-widget--title,
                        .about-internship-domains .pxl-post-content .pxl-widget--desc {
                          color: #ffffff;
                          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
                        }
                        .about-internship-domains .pxl-post-content .pxl-widget--desc {
                          color: rgba(255, 255, 255, 0.92);
                        }
                      `}</style>
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
