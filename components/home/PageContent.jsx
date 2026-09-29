import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import TeamSection from "./TeamSection";
import CaseStudiesSection from "./CaseStudiesSection";
import FunFactsSection from "./FunFactsSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
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
                  id={"pxl-post-5509"}
                  className={"post-5509 page type-page status-publish hentry"}
                >
                  <div className={"pxl-entry-content clearfix"}>
                    <div
                      data-elementor-type={"wp-page"}
                      data-elementor-id={"5509"}
                      className={"elementor elementor-5509"}
                    >
                      <HeroSection />
                      <ProcessSection />
                      <ServicesSection />
                      <PartnersSection />
                      <TeamSection />
                      <CaseStudiesSection />
                      <FunFactsSection />
                      <TestimonialsSection />
                      <BlogSection />
                      <ContactSection />
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
