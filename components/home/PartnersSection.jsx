import { useEffect, useRef } from "react";
import ApplyButton from "../ApplyButton";
import { services } from "../../data/services";

export default function PartnersSection() {
  const internshipImageRef = useRef(null);

  useEffect(() => {
    const image = internshipImageRef.current;
    const mask = image?.closest(".pxl-sticky-mask");
    if (!image || !mask || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    image.classList.add("internship-section-image--pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        image.classList.remove("internship-section-image--pending");
        image.classList.add("internship-section-image--revealed");
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(mask);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        className={
          "elementor-section elementor-top-section elementor-element elementor-element-d3b2ea9 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-full-content-with-space-none pxl-bg-color-none pxl-section-overlay-none"
        }
        data-id={"d3b2ea9"}
        data-element_type={"section"}
        data-e-type={"section"}
        data-settings={'{"stretch_section":"section-stretched"}'}
      >
        <div className={"elementor-container elementor-column-gap-no "}>
          <div
            className={
              "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8e3149c pxl-column-none pxl-column-overflow-hidden-no"
            }
            data-id={"8e3149c"}
            data-element_type={"column"}
            data-e-type={"column"}
          >
            <div
              className={"elementor-widget-wrap elementor-element-populated"}
            >
              <div
                className={
                  "elementor-element elementor-element-5b85680 elementor-widget elementor-widget-pxl_section_scale"
                }
                data-id={"5b85680"}
                data-element_type={"widget"}
                data-e-type={"widget"}
                data-widget_type={"pxl_section_scale.default"}
              >
                <div className={"elementor-widget-container"}>
                  <div className={"pxl-section-scale"}>
                    <div className={"pxl-section-sticky"}>
                      <div className={"pxl-section-slide is-100-vh"}>
                        <div className={"pxl-shape-background is-on-image"}>
                          <div
                            className={"pxl-sticker-shape is-shape-1 is-rotate"}
                          >
                            <img
                              loading={"lazy"}
                              decoding={"async"}
                              width={"99"}
                              height={"99"}
                              src={"/wp-content/uploads/2023/07/shape-6.png"}
                              className={"attachment-full"}
                              alt={""}
                            />
                          </div>
                          <div
                            className={"pxl-sticker-shape is-shape-2 is-rotate"}
                          >
                            <img
                              loading={"lazy"}
                              decoding={"async"}
                              width={"150"}
                              height={"150"}
                              src={"/wp-content/uploads/2023/09/u-shape-2.png"}
                              className={"attachment-full"}
                              alt={""}
                            />
                          </div>
                        </div>
                        <div className={"pxl-sticky-mask"}>
                          <div className={"pxl-sticky-parallax"}>
                            <img
                              src={"/images/internship-college-team-wide.jpg"}
                              alt={
                                "College students collaborating on technology and creative internship projects"
                              }
                              className={"internship-section-image"}
                              ref={internshipImageRef}
                              width={"1536"}
                              height={"1024"}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                          <div className={"pxl-section-overlay"}>
                            <div className={"internship-banner-content"}>
                              <p className={"internship-banner-eyebrow"}>
                                Radhika SkillForge · For college students
                              </p>
                              <h2>Find your internship path</h2>
                              <p className={"internship-banner-description"}>
                                Explore practical, mentor-guided internships
                                across technology and digital media.
                              </p>
                              <ul className={"internship-banner-domains"}>
                                {services.map((service) => (
                                  <li key={service.slug}>
                                    <a href={service.href}>{service.title}</a>
                                  </li>
                                ))}
                              </ul>
                              <ApplyButton />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
