import ServiceCards from "./ServiceCards";
import { serviceListing, services } from "../../data/services";
export default function ServiceGrid({ service }) {
  return (
    <>
      <section
        className={
          "elementor-section elementor-top-section elementor-element elementor-element-cc9220a elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-bg-color-none pxl-section-overlay-none"
        }
        data-id={"cc9220a"}
        data-element_type={"section"}
        data-e-type={"section"}
      >
        <div className={"elementor-container elementor-column-gap-extended "}>
          <div
            className={
              "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-096511c pxl-column-none pxl-column-overflow-hidden-no"
            }
            data-id={"096511c"}
            data-element_type={"column"}
            data-e-type={"column"}
          >
            <div
              className={"elementor-widget-wrap elementor-element-populated"}
            >
              <section
                className={
                  "elementor-section elementor-inner-section elementor-element elementor-element-50ae8b6 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-bg-color-none pxl-section-overlay-none"
                }
                data-id={"50ae8b6"}
                data-element_type={"section"}
                data-e-type={"section"}
              >
                <div
                  className={
                    "elementor-container elementor-column-gap-extended "
                  }
                >
                  <div
                    className={
                      "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-661cde2 pxl-column-none pxl-column-overflow-hidden-no"
                    }
                    data-id={"661cde2"}
                    data-element_type={"column"}
                    data-e-type={"column"}
                  >
                    <div
                      className={
                        "elementor-widget-wrap elementor-element-populated"
                      }
                    >
                      <div
                        className={
                          "elementor-element elementor-element-16f259a elementor-widget elementor-widget-pxl_heading"
                        }
                        data-id={"16f259a"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"pxl_heading.default"}
                      >
                        <div className={"elementor-widget-container"}>
                          <div
                            id={"pxl-pxl_heading-16f259a-5821"}
                            className={
                              "pxl-heading px-sub-title-default-style "
                            }
                          >
                            <div className={"pxl-heading--inner"}>
                              <h3
                                className={
                                  "pxl-item--title style-default highlight-default "
                                }
                                data-wow-delay={"ms"}
                              >
                                {serviceListing.heading}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6fe3bf2 pxl-column-none pxl-column-overflow-hidden-no"
                    }
                    data-id={"6fe3bf2"}
                    data-element_type={"column"}
                    data-e-type={"column"}
                  >
                    <div
                      className={
                        "elementor-widget-wrap elementor-element-populated"
                      }
                    >
                      <div
                        className={
                          "elementor-element elementor-element-503a3ea elementor-widget elementor-widget-pxl_text_editor"
                        }
                        data-id={"503a3ea"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"pxl_text_editor.default"}
                      >
                        <div className={"elementor-widget-container"}>
                          <div className={"pxl-text-editor"}>
                            <div
                              className={"pxl-item--inner "}
                              data-wow-delay={"ms"}
                            >
                              <p>{serviceListing.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className={
                  "elementor-element elementor-element-e1b3444 pxl-post-layout-service-1 elementor-widget elementor-widget-pxl_post_grid"
                }
                data-id={"e1b3444"}
                data-element_type={"widget"}
                data-e-type={"widget"}
                data-widget_type={"pxl_post_grid.default"}
              >
                <div className={"elementor-widget-container"}>
                  <div
                    id={"pxl_post_grid-e1b3444-7946"}
                    className={
                      "pxl-grid pxl-service-grid pxl-service-grid-layout1 pxl-service-style1 pxl-service-l3"
                    }
                    data-start-page={"1"}
                    data-max-pages={"1"}
                    data-total={services.length}
                    data-perpage={services.length}
                    data-next-link={""}
                  >
                    <ServiceCards />
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
