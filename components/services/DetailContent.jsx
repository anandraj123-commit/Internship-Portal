import ServiceSidebar from "./ServiceSidebar";
import ServiceImage from "./ServiceImage";
import ServiceFaqs from "./ServiceFaqs";
export default function DetailContent({ service }) {
  return (
    <>
      <div id={"pxl-main"}>
        <div className={"container"}>
          <div className={"row"}>
            <div id={"pxl-content-area"} className={"col-12"}>
              <main id={"pxl-content-main"}>
                <article
                  id={"pxl-post-2133"}
                  className={
                    "post-2133 service type-service status-publish has-post-thumbnail hentry"
                  }
                >
                  <div
                    data-elementor-type={"wp-post"}
                    data-elementor-id={"2133"}
                    className={"elementor elementor-2133"}
                  >
                    <section
                      className={
                        "elementor-section elementor-top-section elementor-element elementor-element-c666262 pxl-row-scroll-fixed elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-bg-color-none pxl-section-overlay-none"
                      }
                      data-id={"c666262"}
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
                            "elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2248a5f pxl-column-none pxl-column-overflow-hidden-no"
                          }
                          data-id={"2248a5f"}
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
                                "elementor-element elementor-element-2711a8a elementor-widget elementor-widget-pxl_image"
                              }
                              data-id={"2711a8a"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_image.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div
                                  id={"pxl_image-2711a8a-1953"}
                                  className={
                                    "pxl-image-single pxl-disable-parallax-sm pxl-hide-sr-lg  "
                                  }
                                  data-wow-delay={"ms"}
                                >
                                  <div
                                    className={"pxl-item--inner"}
                                    data-wow-delay={"120ms"}
                                  >
                                    <div
                                      className={"pxl-item--image"}
                                      data-parallax-value={""}
                                    >
                                      <ServiceImage
                                        image={service.media[0].image}
                                      />
                                    </div>
                                    <div className={"pxl-service--icon"}>
                                      <i className={service.detailIcon}></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-b0cbd7e elementor-widget elementor-widget-pxl_heading"
                              }
                              data-id={"b0cbd7e"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_heading.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div
                                  id={"pxl-pxl_heading-b0cbd7e-6824"}
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
                                      {service.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-8167b33 elementor-widget elementor-widget-pxl_text_editor"
                              }
                              data-id={"8167b33"}
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
                                    {service.overview}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-3b71596 elementor-widget elementor-widget-pxl_text_editor"
                              }
                              data-id={"3b71596"}
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
                                    {service.approach}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <section
                              className={
                                "elementor-section elementor-inner-section elementor-element elementor-element-19c8fe4 elementor-section-boxed elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-bg-color-none pxl-section-overlay-none"
                              }
                              data-id={"19c8fe4"}
                              data-element_type={"section"}
                              data-e-type={"section"}
                            >
                              <div
                                className={"elementor-background-overlay"}
                              ></div>
                              <div
                                className={
                                  "elementor-container elementor-column-gap-extended "
                                }
                              >
                                <div
                                  className={
                                    "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4dbb785 pxl-column-none pxl-column-overflow-hidden-no"
                                  }
                                  data-id={"4dbb785"}
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
                                        "elementor-element elementor-element-f7da5c3 elementor-widget elementor-widget-pxl_icon_box"
                                      }
                                      data-id={"f7da5c3"}
                                      data-element_type={"widget"}
                                      data-e-type={"widget"}
                                      data-widget_type={"pxl_icon_box.default"}
                                    >
                                      <div
                                        className={"elementor-widget-container"}
                                      >
                                        <div
                                          className={
                                            "pxl-icon-box pxl-icon-box1 style-2 "
                                          }
                                          data-wow-delay={"ms"}
                                        >
                                          <div className={"pxl-item--inner"}>
                                            <div
                                              className={
                                                "pxl-item--meta pxl-flex-middle"
                                              }
                                            >
                                              <div
                                                className={
                                                  "pxl-item--icon pxl-mr-20"
                                                }
                                              >
                                                <i
                                                  aria-hidden={"true"}
                                                  className={
                                                    service.features[0].icon
                                                  }
                                                ></i>
                                              </div>
                                              <h5
                                                className={
                                                  "pxl-item--title el-empty"
                                                }
                                              >
                                                {service.features[0].title}
                                              </h5>
                                            </div>
                                            <div
                                              className={
                                                "pxl-item--description el-empty"
                                              }
                                            >
                                              {service.features[0].description}
                                            </div>
                                            <div
                                              className={"pxl-item--shape"}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "elementor-element elementor-element-a28569f elementor-widget elementor-widget-pxl_icon_box"
                                      }
                                      data-id={"a28569f"}
                                      data-element_type={"widget"}
                                      data-e-type={"widget"}
                                      data-widget_type={"pxl_icon_box.default"}
                                    >
                                      <div
                                        className={"elementor-widget-container"}
                                      >
                                        <div
                                          className={
                                            "pxl-icon-box pxl-icon-box1 style-2 "
                                          }
                                          data-wow-delay={"ms"}
                                        >
                                          <div className={"pxl-item--inner"}>
                                            <div
                                              className={
                                                "pxl-item--meta pxl-flex-middle"
                                              }
                                            >
                                              <div
                                                className={
                                                  "pxl-item--icon pxl-mr-20"
                                                }
                                              >
                                                <i
                                                  aria-hidden={"true"}
                                                  className={
                                                    service.features[1].icon
                                                  }
                                                ></i>
                                              </div>
                                              <h5
                                                className={
                                                  "pxl-item--title el-empty"
                                                }
                                              >
                                                {service.features[1].title}
                                              </h5>
                                            </div>
                                            <div
                                              className={
                                                "pxl-item--description el-empty"
                                              }
                                            >
                                              {service.features[1].description}
                                            </div>
                                            <div
                                              className={"pxl-item--shape"}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className={
                                    "elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-298cd3a pxl-column-none pxl-column-overflow-hidden-no"
                                  }
                                  data-id={"298cd3a"}
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
                                        "elementor-element elementor-element-e6e539e elementor-widget elementor-widget-pxl_icon_box"
                                      }
                                      data-id={"e6e539e"}
                                      data-element_type={"widget"}
                                      data-e-type={"widget"}
                                      data-widget_type={"pxl_icon_box.default"}
                                    >
                                      <div
                                        className={"elementor-widget-container"}
                                      >
                                        <div
                                          className={
                                            "pxl-icon-box pxl-icon-box1 style-2 "
                                          }
                                          data-wow-delay={"ms"}
                                        >
                                          <div className={"pxl-item--inner"}>
                                            <div
                                              className={
                                                "pxl-item--meta pxl-flex-middle"
                                              }
                                            >
                                              <div
                                                className={
                                                  "pxl-item--icon pxl-mr-20"
                                                }
                                              >
                                                <i
                                                  aria-hidden={"true"}
                                                  className={
                                                    service.features[2].icon
                                                  }
                                                ></i>
                                              </div>
                                              <h5
                                                className={
                                                  "pxl-item--title el-empty"
                                                }
                                              >
                                                {service.features[2].title}
                                              </h5>
                                            </div>
                                            <div
                                              className={
                                                "pxl-item--description el-empty"
                                              }
                                            >
                                              {service.features[2].description}
                                            </div>
                                            <div
                                              className={"pxl-item--shape"}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "elementor-element elementor-element-b296027 elementor-widget elementor-widget-pxl_icon_box"
                                      }
                                      data-id={"b296027"}
                                      data-element_type={"widget"}
                                      data-e-type={"widget"}
                                      data-widget_type={"pxl_icon_box.default"}
                                    >
                                      <div
                                        className={"elementor-widget-container"}
                                      >
                                        <div
                                          className={
                                            "pxl-icon-box pxl-icon-box1 style-2 "
                                          }
                                          data-wow-delay={"ms"}
                                        >
                                          <div className={"pxl-item--inner"}>
                                            <div
                                              className={
                                                "pxl-item--meta pxl-flex-middle"
                                              }
                                            >
                                              <div
                                                className={
                                                  "pxl-item--icon pxl-mr-20"
                                                }
                                              >
                                                <i
                                                  aria-hidden={"true"}
                                                  className={
                                                    service.features[3].icon
                                                  }
                                                ></i>
                                              </div>
                                              <h5
                                                className={
                                                  "pxl-item--title el-empty"
                                                }
                                              >
                                                {service.features[3].title}
                                              </h5>
                                            </div>
                                            <div
                                              className={
                                                "pxl-item--description el-empty"
                                              }
                                            >
                                              {service.features[3].description}
                                            </div>
                                            <div
                                              className={"pxl-item--shape"}
                                            ></div>
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
                                "elementor-element elementor-element-ca5c234 elementor-widget elementor-widget-pxl_text_editor"
                              }
                              data-id={"ca5c234"}
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
                                    {service.deliverables}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-da6fd5e elementor-widget elementor-widget-pxl_heading"
                              }
                              data-id={"da6fd5e"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_heading.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div
                                  id={"pxl-pxl_heading-da6fd5e-5874"}
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
                                      {service.title}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-a59e799 elementor-widget elementor-widget-pxl_text_editor"
                              }
                              data-id={"a59e799"}
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
                                    {service.summary}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-d2c7ae8 elementor-widget elementor-widget-pxl_text_editor"
                              }
                              data-id={"d2c7ae8"}
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
                                    {service.handover}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-319bb39 elementor-widget elementor-widget-pxl_gallery_grid"
                              }
                              data-id={"319bb39"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_gallery_grid.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div
                                  className={
                                    "pxl-grid pxl-gallery-grid pxl-gallery-grid1"
                                  }
                                  data-gutter={"15"}
                                >
                                  <div
                                    className={
                                      "pxl-grid-inner pxl-grid-masonry row"
                                    }
                                  >
                                    <div className={"grid-sizer col-4"}></div>
                                    <div
                                      className={
                                        "pxl-grid-item col-4 elementor-repeater-item-4489c0e"
                                      }
                                    >
                                      <div className={"pxl-item--inner"}>
                                        <div className={"pxl-item--image"}>
                                          <a href={service.media[1].href}>
                                            <ServiceImage
                                              image={service.media[1].image}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "pxl-grid-item col-4 elementor-repeater-item-a820031"
                                      }
                                    >
                                      <div className={"pxl-item--inner"}>
                                        <div className={"pxl-item--image"}>
                                          <a href={service.media[2].href}>
                                            <ServiceImage
                                              image={service.media[2].image}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "pxl-grid-item col-4 elementor-repeater-item-511d108"
                                      }
                                    >
                                      <div className={"pxl-item--inner"}>
                                        <div className={"pxl-item--image"}>
                                          <a href={service.media[3].href}>
                                            <ServiceImage
                                              image={service.media[3].image}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "pxl-grid-item col-4 elementor-repeater-item-e462f37"
                                      }
                                    >
                                      <div className={"pxl-item--inner"}>
                                        <div className={"pxl-item--image"}>
                                          <a href={service.media[4].href}>
                                            <ServiceImage
                                              image={service.media[4].image}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className={
                                        "pxl-grid-item col-4 elementor-repeater-item-e1ab6aa"
                                      }
                                    >
                                      <div className={"pxl-item--inner"}>
                                        <div className={"pxl-item--image"}>
                                          <a href={service.media[5].href}>
                                            <ServiceImage
                                              image={service.media[5].image}
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-a3e3ac1 elementor-widget elementor-widget-pxl_heading"
                              }
                              data-id={"a3e3ac1"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_heading.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div
                                  id={"pxl-pxl_heading-a3e3ac1-4187"}
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
                                      {service.faqHeading}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-a31e278 elementor-widget elementor-widget-pxl_accordion"
                              }
                              data-id={"a31e278"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_accordion.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <ServiceFaqs service={service} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            "elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ebbd329 pxl-column-sticky pxl-column-overflow-hidden-no"
                          }
                          data-id={"ebbd329"}
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
                                "elementor-element elementor-element-4bd68d2 elementor-widget elementor-widget-pxl_search_form"
                              }
                              data-id={"4bd68d2"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_search_form.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div className={"pxl-search-form1"}>
                                  <h3 className={"pxl-widget-title pxl-empty"}>
                                    {"Search"}
                                  </h3>
                                  <form
                                    role={"search"}
                                    method={"get"}
                                    className={"pxl-search-form "}
                                    action={"/"}
                                    data-wow-delay={"ms"}
                                  >
                                    <div className={"pxl-searchform-wrap"}>
                                      <input
                                        type={"text"}
                                        className={"pxl-search-field"}
                                        placeholder={"Search here..."}
                                        name={"s"}
                                      />
                                      <button
                                        type={"submit"}
                                        className={"pxl-search-submit"}
                                      >
                                        <i className={"flaticon-search"}></i>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-6a35e50 elementor-widget elementor-widget-pxl_link"
                              }
                              data-id={"6a35e50"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_link.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <ServiceSidebar service={service} />
                              </div>
                            </div>
                            <div
                              className={
                                "elementor-element elementor-element-c583202 elementor-widget elementor-widget-pxl_info_box"
                              }
                              data-id={"c583202"}
                              data-element_type={"widget"}
                              data-e-type={"widget"}
                              data-widget_type={"pxl_info_box.default"}
                            >
                              <div className={"elementor-widget-container"}>
                                <div className={"pxl-info-box1"}>
                                  <div
                                    className={"pxl-item--bg bg-image"}
                                    style={{
                                      backgroundImage:
                                        "url(/wp-content/uploads/2023/08/bg-contact-info.jpg)",
                                    }}
                                  ></div>
                                  <div className={"pxl-item--icon"}>
                                    <i
                                      className={
                                        "flaticon-telephone-1 el-effect-zigzag"
                                      }
                                    ></i>
                                  </div>
                                  <div className={"pxl-phone--number"}>
                                    {"+215 5747 6654"}
                                  </div>
                                  <div className={"pxl-item--desc"}>
                                    {
                                      "Monday – Friday: 7:00 am -8:00 pm24/7 Emergency Service"
                                    }
                                  </div>
                                  <a
                                    className={"pxl-phone--link"}
                                    href={"tel:+21557476654"}
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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
