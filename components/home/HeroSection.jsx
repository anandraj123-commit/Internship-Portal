import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const slider = document.getElementById("rev_slider_2_1");
    let frame;
    const layout = () => {
      if (window.innerWidth <= 1200) return;
      slider.querySelectorAll("rs-group").forEach((group) => {
        const heading = group.querySelector('rs-layer[id$="-layer-3"]');
        const description = group.querySelector('rs-layer[id$="-layer-4"]');
        if (!heading || !description) return;
        const range = document.createRange();
        range.selectNodeContents(heading.firstElementChild);
        const headingWidth = range.getBoundingClientRect().width;
        if (!headingWidth) return;
        group.style.setProperty("--description-width", `${headingWidth * 0.8}px`);
        const descriptionTop = heading.offsetHeight + 16;
        const buttonsTop = descriptionTop + description.offsetHeight + 32;
        const buttons = group.querySelectorAll('a[id$="-layer-5"], rs-layer[id$="-layer-7"]');
        const buttonHeight = Math.max(...Array.from(buttons, (button) => button.offsetHeight));
        group.style.setProperty("--description-top", `${descriptionTop}px`);
        group.style.setProperty("--buttons-top", `${buttonsTop}px`);
        group.parentElement.style.setProperty("--hero-copy-height", `${buttonsTop + buttonHeight}px`);
      });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    };
    const observer = new ResizeObserver(schedule);
    slider.querySelectorAll('rs-layer[id$="-layer-3"], rs-layer[id$="-layer-4"], a[id$="-layer-5"], rs-layer[id$="-layer-7"]').forEach((layer) => observer.observe(layer));
    window.addEventListener("resize", schedule);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section
        className={
          "elementor-section elementor-top-section elementor-element elementor-element-596b063 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-overflow-visible pxl-section-fix-none pxl-full-content-with-space-none pxl-bg-color-none pxl-section-overlay-none"
        }
        data-id={"596b063"}
        data-element_type={"section"}
        data-e-type={"section"}
        data-settings={
          '{"background_background":"classic","stretch_section":"section-stretched"}'
        }
      >
        <div className={"elementor-container elementor-column-gap-no "}>
          <div
            className={
              "elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8181532 pxl-column-none pxl-column-overflow-hidden-no"
            }
            data-id={"8181532"}
            data-element_type={"column"}
            data-e-type={"column"}
          >
            <div
              className={"elementor-widget-wrap elementor-element-populated"}
            >
              <div
                className={
                  "elementor-element elementor-element-19942a8 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-pxl_icon"
                }
                data-id={"19942a8"}
                data-element_type={"widget"}
                data-e-type={"widget"}
                data-settings={'{"_position":"absolute"}'}
                data-widget_type={"pxl_icon.default"}
              >
                <div className={"elementor-widget-container"}>
                  <div
                    className={"pxl-icon-list pxl-icon1 style-2 "}
                    data-wow-delay={"ms"}
                  >
                    <a
                      className={"elementor-repeater-item-1b713b3 ps-top"}
                      href={"/#"}
                    >
                      <i
                        aria-hidden={"true"}
                        className={"fab fa-instagram"}
                      ></i>
                    </a>
                    <a
                      className={"elementor-repeater-item-f38c69c ps-top"}
                      href={"/#"}
                    >
                      <i
                        aria-hidden={"true"}
                        className={"fab fa-linkedin-in"}
                      ></i>
                    </a>
                    <a
                      className={"elementor-repeater-item-42b099a ps-top"}
                      href={"/#"}
                    >
                      <i
                        aria-hidden={"true"}
                        className={"fab fa-facebook-f"}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <section
                className={
                  "elementor-section elementor-inner-section elementor-element elementor-element-c8dc0ba elementor-section-full_width pxl-section-overflow-hidden elementor-section-height-default elementor-section-height-default pxl-row-scroll-none pxl-zoom-point-false pxl-section-fix-none pxl-full-content-with-space-none pxl-bg-color-none pxl-section-overlay-none"
                }
                data-id={"c8dc0ba"}
                data-element_type={"section"}
                data-e-type={"section"}
              >
                <div className={"elementor-container elementor-column-gap-no "}>
                  <div
                    className={
                      "elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2f3f99d pxl-column-none pxl-column-overflow-hidden-no"
                    }
                    data-id={"2f3f99d"}
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
                          "elementor-element elementor-element-2d2bd7c elementor-widget elementor-widget-slider_revolution"
                        }
                        data-id={"2d2bd7c"}
                        data-element_type={"widget"}
                        data-e-type={"widget"}
                        data-widget_type={"slider_revolution.default"}
                      >
                        <div className={"elementor-widget-container"}>
                          <div className={"wp-block-themepunch-revslider"}>
                            <p className={"rs-p-wp-fix"}></p>
                            <rs-module-wrap
                              id={"rev_slider_2_1_wrapper"}
                              data-source={"gallery"}
                              style={{
                                visibility: "hidden",
                                background: "transparent",
                                padding: "0",
                                margin: "0px auto",
                                marginTop: "0",
                                marginBottom: "0",
                              }}
                            >
                              <rs-module
                                id={"rev_slider_2_1"}
                                style={{}}
                                data-version={"6.6.16"}
                              >
                                <rs-slides
                                  style={{
                                    overflow: "hidden",
                                    position: "absolute",
                                  }}
                                >
                                  <rs-slide
                                    style={{ position: "absolute" }}
                                    data-key={"rs-3"}
                                    data-title={"Slide"}
                                    data-thumb={
                                      "//itagency.in/wp-content/uploads/2023/09/u-slider-bg2-300x300.jpg"
                                    }
                                    data-in={"o:0;"}
                                    data-out={"a:false;"}
                                  >
                                    <img
                                      decoding={"async"}
                                      src={
                                        "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                      }
                                      alt={""}
                                      title={"u-slider-bg2"}
                                      width={"1800"}
                                      height={"1066"}
                                      className={
                                        "rev-slidebg tp-rs-img rs-lazyload"
                                      }
                                      data-lazyload={
                                        "//itagency.in/wp-content/uploads/2023/09/u-slider-bg2.jpg"
                                      }
                                      data-panzoom={"d:10000;ss:110%;se:100%;"}
                                      data-no-retina={""}
                                    />
                                    <rs-group
                                      id={"slider-2-slide-3-layer-2"}
                                      data-type={"group"}
                                      data-xy={
                                        "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;"
                                      }
                                      data-text={
                                        "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                      }
                                      data-dim={
                                        "w:800px,800px,600px,300px;h:300px,300px,320px,350px;"
                                      }
                                      data-rsp_o={"off"}
                                      data-rsp_bd={"off"}
                                      data-frame_0={"o:1;"}
                                      data-frame_999={
                                        "o:0;st:w;sR:8700;sA:9000;"
                                      }
                                      style={{ zIndex: "8" }}
                                    >
                                      <rs-layer
                                        id={"slider-2-slide-3-layer-6"}
                                        data-type={"image"}
                                        data-xy={
                                          "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;"
                                        }
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                        }
                                        data-dim={
                                          "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:-50;"}
                                        data-frame_1={"st:800;sp:1000;sR:800;"}
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        data-loop_0={"o:0;"}
                                        data-loop_999={
                                          "sp:1800;st:600;e:sine.inOut;yyf:t;"
                                        }
                                        style={{ zIndex: "10" }}
                                      >
                                        <img
                                          decoding={"async"}
                                          src={
                                            "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                          }
                                          alt={""}
                                          className={"tp-rs-img rs-lazyload"}
                                          width={"42"}
                                          height={"42"}
                                          data-lazyload={
                                            "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png"
                                          }
                                          data-no-retina={""}
                                        />
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-3-layer-7"}
                                        data-type={"text"}
                                        data-xy={"xo:280px,280px,280px,0;y:b;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:250px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1550;sp:1000;sR:1550;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6450;"}
                                        style={{
                                          zIndex: "9",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <a
                                          className={
                                            "shortcode-btn-style1 pxl-action-popup btn-text-parallax"
                                          }
                                          href={
                                            "https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                          }
                                        >
                                          <span
                                            className={
                                              "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                            }
                                          ></span>
                                          <span className={"pxl--btn-text"}>
                                            {"Video"}
                                          </span>
                                        </a>
                                      </rs-layer>
                                      <a
                                        id={"slider-2-slide-3-layer-5"}
                                        className={"rs-layer"}
                                        href={
                                          "https://demo.casethemes.net/saira/our-services/"
                                        }
                                        target={"_self"}
                                        data-type={"text"}
                                        data-xy={"y:b;yo:5px,5px,5px,90px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1300;sp:1000;sR:1300;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6700;"}
                                        style={{
                                          zIndex: "8",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <span
                                          className={
                                            "btn btn-slider1 btn-text-nina"
                                          }
                                        >
                                          <span
                                            className={"pxl--btn-text"}
                                            data-text={"View Services"}
                                          >
                                            <span>{"V"}</span>
                                            <span>{"i"}</span>
                                            <span>{"e"}</span>
                                            <span>{"w"}</span>
                                            <span className={"spacer"}></span>
                                            <span>{"S"}</span>
                                            <span>{"e"}</span>
                                            <span>{"r"}</span>
                                            <span>{"v"}</span>
                                            <span>{"i"}</span>
                                            <span>{"c"}</span>
                                            <span>{"e"}</span>
                                            <span>{"s"}</span>
                                          </span>
                                          <i
                                            className={
                                              "flaticon-right-up pxl-ml-14"
                                            }
                                          ></i>
                                        </span>
                                      </a>
                                      <rs-layer
                                        id={"slider-2-slide-3-layer-4"}
                                        data-type={"text"}
                                        data-color={"#d2d2d2"}
                                        data-xy={"yo:110px,110px,146px,96px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,20,17,15;l:36,36,30,24;"
                                        }
                                        data-dim={"w:570px,570px,460px,280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1050;sp:1000;sR:1050;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6950;"}
                                        style={{
                                          zIndex: "7",
                                          fontFamily: "'Lato'",
                                        }}
                                      >
                                        {
                                          "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                        }
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-3-layer-3"}
                                        data-type={"text"}
                                        data-xy={"yo:-14px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:800;sp:1000;sR:800;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        style={{
                                          zIndex: "6",
                                          fontFamily: "'Inter Tight'",
                                        }}
                                      >
                                        <div className={"text-gradient-top"}>
                                          {"Grow Busines"}
                                          <span className={"text-box-gradient"}>
                                            {"s"}
                                          </span>
                                          <br />
                                          {"\nRevenue "}
                                          <span
                                            className={"text-gradient"}
                                            style={{
                                              "--gradient-color-from":
                                                "var(--brand-color)",
                                              "--gradient-color-to": "var(--brand-color)",
                                            }}
                                          >
                                            {"Today"}
                                          </span>
                                        </div>
                                      </rs-layer>
                                    </rs-group>
                                    <rs-layer
                                      id={"slider-2-slide-3-layer-0"}
                                      data-type={"shape"}
                                      data-rsp_ch={"on"}
                                      data-text={
                                        "w:normal;s:20,16,12,7;l:0,20,15,9;"
                                      }
                                      data-dim={"w:100%;h:100%;"}
                                      data-basealign={"slide"}
                                      data-frame_1={"sp:0;"}
                                      data-frame_999={"o:0;st:w;sR:8700;"}
                                      style={{
                                        zIndex: "6",
                                        backgroundColor: "rgba(0,0,0,0.78)",
                                      }}
                                    ></rs-layer>
                                  </rs-slide>
                                  <rs-slide
                                    style={{ position: "absolute" }}
                                    data-key={"rs-4"}
                                    data-title={"Slide"}
                                    data-thumb={
                                      "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-2-300x300.jpg"
                                    }
                                    data-in={"o:0;"}
                                    data-out={"a:false;"}
                                  >
                                    <img
                                      loading={"lazy"}
                                      decoding={"async"}
                                      src={
                                        "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                      }
                                      alt={""}
                                      title={"u-bg-slide-2"}
                                      width={"1800"}
                                      height={"1066"}
                                      className={
                                        "rev-slidebg tp-rs-img rs-lazyload"
                                      }
                                      data-lazyload={
                                        "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-2.jpg"
                                      }
                                      data-panzoom={"d:10000;ss:100%;se:110%;"}
                                      data-no-retina={""}
                                    />
                                    <rs-group
                                      id={"slider-2-slide-4-layer-2"}
                                      data-type={"group"}
                                      data-xy={
                                        "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;"
                                      }
                                      data-text={
                                        "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                      }
                                      data-dim={
                                        "w:800px,800px,600px,300px;h:300px,300px,320px,350px;"
                                      }
                                      data-rsp_o={"off"}
                                      data-rsp_bd={"off"}
                                      data-frame_0={"o:1;"}
                                      data-frame_999={
                                        "o:0;st:w;sR:8700;sA:9000;"
                                      }
                                      style={{ zIndex: "8" }}
                                    >
                                      <rs-layer
                                        id={"slider-2-slide-4-layer-6"}
                                        data-type={"image"}
                                        data-xy={
                                          "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;"
                                        }
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                        }
                                        data-dim={
                                          "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:-50;"}
                                        data-frame_1={"st:800;sp:1000;sR:800;"}
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        data-loop_0={"o:0;"}
                                        data-loop_999={
                                          "sp:1800;st:600;e:sine.inOut;yyf:t;"
                                        }
                                        style={{ zIndex: "10" }}
                                      >
                                        <img
                                          decoding={"async"}
                                          src={
                                            "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                          }
                                          alt={""}
                                          className={"tp-rs-img rs-lazyload"}
                                          width={"42"}
                                          height={"42"}
                                          data-lazyload={
                                            "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png"
                                          }
                                          data-no-retina={""}
                                        />
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-4-layer-7"}
                                        data-type={"text"}
                                        data-xy={"xo:280px,280px,280px,0;y:b;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:250px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1550;sp:1000;sR:1550;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6450;"}
                                        style={{
                                          zIndex: "9",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <a
                                          className={
                                            "shortcode-btn-style1 pxl-action-popup btn-text-parallax"
                                          }
                                          href={
                                            "https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                          }
                                        >
                                          <span
                                            className={
                                              "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                            }
                                          ></span>
                                          <span className={"pxl--btn-text"}>
                                            {"Video"}
                                          </span>
                                        </a>
                                      </rs-layer>
                                      <a
                                        id={"slider-2-slide-4-layer-5"}
                                        className={"rs-layer"}
                                        href={
                                          "https://demo.casethemes.net/saira/our-services/"
                                        }
                                        target={"_self"}
                                        data-type={"text"}
                                        data-xy={"y:b;yo:5px,5px,5px,90px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1300;sp:1000;sR:1300;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6700;"}
                                        style={{
                                          zIndex: "8",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <span
                                          className={
                                            "btn btn-slider1 btn-text-nina"
                                          }
                                        >
                                          <span
                                            className={"pxl--btn-text"}
                                            data-text={"View Services"}
                                          >
                                            <span>{"V"}</span>
                                            <span>{"i"}</span>
                                            <span>{"e"}</span>
                                            <span>{"w"}</span>
                                            <span className={"spacer"}></span>
                                            <span>{"S"}</span>
                                            <span>{"e"}</span>
                                            <span>{"r"}</span>
                                            <span>{"v"}</span>
                                            <span>{"i"}</span>
                                            <span>{"c"}</span>
                                            <span>{"e"}</span>
                                            <span>{"s"}</span>
                                          </span>
                                          <i
                                            className={
                                              "flaticon-right-up pxl-ml-14"
                                            }
                                          ></i>
                                        </span>
                                      </a>
                                      <rs-layer
                                        id={"slider-2-slide-4-layer-4"}
                                        data-type={"text"}
                                        data-color={"#d2d2d2"}
                                        data-xy={"yo:110px,110px,146px,96px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,20,17,15;l:36,36,30,24;"
                                        }
                                        data-dim={"w:570px,570px,460px,280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1050;sp:1000;sR:1050;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6950;"}
                                        style={{
                                          zIndex: "7",
                                          fontFamily: "'Lato'",
                                        }}
                                      >
                                        {
                                          "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                        }
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-4-layer-3"}
                                        data-type={"text"}
                                        data-xy={"yo:-14px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:800;sp:1000;sR:800;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        style={{
                                          zIndex: "6",
                                          fontFamily: "'Inter Tight'",
                                        }}
                                      >
                                        <div className={"text-gradient-top"}>
                                          {"Grow Financ"}
                                          <span className={"text-box-gradient"}>
                                            {"e"}
                                          </span>
                                          <br />
                                          {"\nRevenue "}
                                          <span
                                            className={"text-gradient"}
                                            style={{
                                              "--gradient-color-from":
                                                "var(--brand-color)",
                                              "--gradient-color-to": "var(--brand-color)",
                                            }}
                                          >
                                            {"Today"}
                                          </span>
                                        </div>
                                      </rs-layer>
                                    </rs-group>
                                    <rs-layer
                                      id={"slider-2-slide-4-layer-0"}
                                      data-type={"shape"}
                                      data-rsp_ch={"on"}
                                      data-text={
                                        "w:normal;s:20,16,12,7;l:0,20,15,9;"
                                      }
                                      data-dim={"w:100%;h:100%;"}
                                      data-basealign={"slide"}
                                      data-frame_1={"sp:0;"}
                                      data-frame_999={"o:0;st:w;sR:9000;"}
                                      style={{
                                        zIndex: "6",
                                        backgroundColor: "rgba(0,0,0,0.78)",
                                      }}
                                    ></rs-layer>
                                  </rs-slide>
                                  <rs-slide
                                    style={{ position: "absolute" }}
                                    data-key={"rs-5"}
                                    data-title={"Slide"}
                                    data-thumb={
                                      "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-3-300x300.jpg"
                                    }
                                    data-in={"o:0;"}
                                    data-out={"a:false;"}
                                  >
                                    <img
                                      loading={"lazy"}
                                      decoding={"async"}
                                      src={
                                        "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                      }
                                      alt={""}
                                      title={"u-bg-slide-3"}
                                      width={"1800"}
                                      height={"1066"}
                                      className={
                                        "rev-slidebg tp-rs-img rs-lazyload"
                                      }
                                      data-lazyload={
                                        "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-3.jpg"
                                      }
                                      data-panzoom={"d:10000;ss:110%;se:100%;"}
                                      data-no-retina={""}
                                    />
                                    <rs-group
                                      id={"slider-2-slide-5-layer-2"}
                                      data-type={"group"}
                                      data-xy={
                                        "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;"
                                      }
                                      data-text={
                                        "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                      }
                                      data-dim={
                                        "w:800px,800px,600px,300px;h:300px,300px,320px,350px;"
                                      }
                                      data-rsp_o={"off"}
                                      data-rsp_bd={"off"}
                                      data-frame_0={"o:1;"}
                                      data-frame_999={
                                        "o:0;st:w;sR:8700;sA:9000;"
                                      }
                                      style={{ zIndex: "8" }}
                                    >
                                      <rs-layer
                                        id={"slider-2-slide-5-layer-6"}
                                        data-type={"image"}
                                        data-xy={
                                          "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;"
                                        }
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                        }
                                        data-dim={
                                          "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:-50;"}
                                        data-frame_1={"st:800;sp:1000;sR:800;"}
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        data-loop_0={"o:0;"}
                                        data-loop_999={
                                          "sp:1800;st:600;e:sine.inOut;yyf:t;"
                                        }
                                        style={{ zIndex: "10" }}
                                      >
                                        <img
                                          decoding={"async"}
                                          src={
                                            "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                          }
                                          alt={""}
                                          className={"tp-rs-img rs-lazyload"}
                                          width={"42"}
                                          height={"42"}
                                          data-lazyload={
                                            "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png"
                                          }
                                          data-no-retina={""}
                                        />
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-5-layer-7"}
                                        data-type={"text"}
                                        data-xy={"xo:280px,280px,280px,0;y:b;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:250px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1550;sp:1000;sR:1550;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6450;"}
                                        style={{
                                          zIndex: "9",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <a
                                          className={
                                            "shortcode-btn-style1 pxl-action-popup btn-text-parallax"
                                          }
                                          href={
                                            "https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                          }
                                        >
                                          <span
                                            className={
                                              "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                            }
                                          ></span>
                                          <span className={"pxl--btn-text"}>
                                            {"Video"}
                                          </span>
                                        </a>
                                      </rs-layer>
                                      <a
                                        id={"slider-2-slide-5-layer-5"}
                                        className={"rs-layer"}
                                        href={
                                          "https://demo.casethemes.net/saira/our-services/"
                                        }
                                        target={"_self"}
                                        data-type={"text"}
                                        data-xy={"y:b;yo:5px,5px,5px,90px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1300;sp:1000;sR:1300;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6700;"}
                                        style={{
                                          zIndex: "8",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <span
                                          className={
                                            "btn btn-slider1 btn-text-nina"
                                          }
                                        >
                                          <span
                                            className={"pxl--btn-text"}
                                            data-text={"View Services"}
                                          >
                                            <span>{"V"}</span>
                                            <span>{"i"}</span>
                                            <span>{"e"}</span>
                                            <span>{"w"}</span>
                                            <span className={"spacer"}></span>
                                            <span>{"S"}</span>
                                            <span>{"e"}</span>
                                            <span>{"r"}</span>
                                            <span>{"v"}</span>
                                            <span>{"i"}</span>
                                            <span>{"c"}</span>
                                            <span>{"e"}</span>
                                            <span>{"s"}</span>
                                          </span>
                                          <i
                                            className={
                                              "flaticon-right-up pxl-ml-14"
                                            }
                                          ></i>
                                        </span>
                                      </a>
                                      <rs-layer
                                        id={"slider-2-slide-5-layer-4"}
                                        data-type={"text"}
                                        data-color={"#d2d2d2"}
                                        data-xy={"yo:110px,110px,146px,96px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,20,17,15;l:36,36,30,24;"
                                        }
                                        data-dim={"w:570px,570px,460px,280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1050;sp:1000;sR:1050;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6950;"}
                                        style={{
                                          zIndex: "7",
                                          fontFamily: "'Lato'",
                                        }}
                                      >
                                        {
                                          "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                        }
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-5-layer-3"}
                                        data-type={"text"}
                                        data-xy={"yo:-14px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:800;sp:1000;sR:800;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        style={{
                                          zIndex: "6",
                                          fontFamily: "'Inter Tight'",
                                        }}
                                      >
                                        <div className={"text-gradient-top"}>
                                          {"Grow Analytic"}
                                          <span className={"text-box-gradient"}>
                                            {"s"}
                                          </span>
                                          <br />
                                          {"\nRevenue "}
                                          <span
                                            className={"text-gradient"}
                                            style={{
                                              "--gradient-color-from":
                                                "var(--brand-color)",
                                              "--gradient-color-to": "var(--brand-color)",
                                            }}
                                          >
                                            {"Today"}
                                          </span>
                                        </div>
                                      </rs-layer>
                                    </rs-group>
                                    <rs-layer
                                      id={"slider-2-slide-5-layer-0"}
                                      data-type={"shape"}
                                      data-rsp_ch={"on"}
                                      data-text={
                                        "w:normal;s:20,16,12,7;l:0,20,15,9;"
                                      }
                                      data-dim={"w:100%;h:100%;"}
                                      data-basealign={"slide"}
                                      data-frame_1={"sp:0;"}
                                      data-frame_999={"o:0;st:w;sR:9000;"}
                                      style={{
                                        zIndex: "6",
                                        backgroundColor: "rgba(0,0,0,0.78)",
                                      }}
                                    ></rs-layer>
                                  </rs-slide>
                                  <rs-slide
                                    style={{ position: "absolute" }}
                                    data-key={"rs-6"}
                                    data-title={"Slide"}
                                    data-thumb={
                                      "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-4-300x300.jpg"
                                    }
                                    data-in={"o:0;"}
                                    data-out={"a:false;"}
                                  >
                                    <img
                                      loading={"lazy"}
                                      decoding={"async"}
                                      src={
                                        "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                      }
                                      alt={""}
                                      title={"u-bg-slide-4"}
                                      width={"1800"}
                                      height={"1066"}
                                      className={
                                        "rev-slidebg tp-rs-img rs-lazyload"
                                      }
                                      data-lazyload={
                                        "//itagency.in/wp-content/uploads/2023/09/u-bg-slide-4.jpg"
                                      }
                                      data-panzoom={"d:10000;ss:100%;se:110%;"}
                                      data-no-retina={""}
                                    />
                                    <rs-group
                                      id={"slider-2-slide-6-layer-2"}
                                      data-type={"group"}
                                      data-xy={
                                        "xo:100px,30px,20px,20px;y:m;yo:-35px,-35px,-60px,0;"
                                      }
                                      data-text={
                                        "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                      }
                                      data-dim={
                                        "w:800px,800px,600px,300px;h:300px,300px,320px,350px;"
                                      }
                                      data-rsp_o={"off"}
                                      data-rsp_bd={"off"}
                                      data-frame_0={"o:1;"}
                                      data-frame_999={
                                        "o:0;st:w;sR:8700;sA:9000;"
                                      }
                                      style={{ zIndex: "8" }}
                                    >
                                      <rs-layer
                                        id={"slider-2-slide-6-layer-6"}
                                        data-type={"image"}
                                        data-xy={
                                          "xo:-42px,-42px,0,0;yo:-25px,-25px,-60px,-60px;"
                                        }
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,17,12,7;l:0,21,15,9;"
                                        }
                                        data-dim={
                                          "w:['42px','42px','42px','42px'];h:['42px','42px','42px','42px'];"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:-50;"}
                                        data-frame_1={"st:800;sp:1000;sR:800;"}
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        data-loop_0={"o:0;"}
                                        data-loop_999={
                                          "sp:1800;st:600;e:sine.inOut;yyf:t;"
                                        }
                                        style={{ zIndex: "10" }}
                                      >
                                        <img
                                          decoding={"async"}
                                          src={
                                            "/wp-content/plugins/revslider/public/assets/assets/dummy.png"
                                          }
                                          alt={""}
                                          className={"tp-rs-img rs-lazyload"}
                                          width={"42"}
                                          height={"42"}
                                          data-lazyload={
                                            "//itagency.in/wp-content/uploads/2023/09/u-slider-shape1.png"
                                          }
                                          data-no-retina={""}
                                        />
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-6-layer-7"}
                                        data-type={"text"}
                                        data-xy={"xo:280px,280px,280px,0;y:b;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:250px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1550;sp:1000;sR:1550;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6450;"}
                                        style={{
                                          zIndex: "9",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <a
                                          className={
                                            "shortcode-btn-style1 pxl-action-popup btn-text-parallax"
                                          }
                                          href={
                                            "https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                          }
                                        >
                                          <span
                                            className={
                                              "shortcode-btn-icon caseicon-play1 pxl-mr-18"
                                            }
                                          ></span>
                                          <span className={"pxl--btn-text"}>
                                            {"Video"}
                                          </span>
                                        </a>
                                      </rs-layer>
                                      <a
                                        id={"slider-2-slide-6-layer-5"}
                                        className={"rs-layer"}
                                        href={
                                          "https://demo.casethemes.net/saira/our-services/"
                                        }
                                        target={"_self"}
                                        data-type={"text"}
                                        data-xy={"y:b;yo:5px,5px,5px,90px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:13;l:25,21,15,9;"
                                        }
                                        data-dim={"w:280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1300;sp:1000;sR:1300;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6700;"}
                                        style={{
                                          zIndex: "8",
                                          fontFamily: "'Roboto'",
                                        }}
                                      >
                                        <span
                                          className={
                                            "btn btn-slider1 btn-text-nina"
                                          }
                                        >
                                          <span
                                            className={"pxl--btn-text"}
                                            data-text={"View Services"}
                                          >
                                            <span>{"V"}</span>
                                            <span>{"i"}</span>
                                            <span>{"e"}</span>
                                            <span>{"w"}</span>
                                            <span className={"spacer"}></span>
                                            <span>{"S"}</span>
                                            <span>{"e"}</span>
                                            <span>{"r"}</span>
                                            <span>{"v"}</span>
                                            <span>{"i"}</span>
                                            <span>{"c"}</span>
                                            <span>{"e"}</span>
                                            <span>{"s"}</span>
                                          </span>
                                          <i
                                            className={
                                              "flaticon-right-up pxl-ml-14"
                                            }
                                          ></i>
                                        </span>
                                      </a>
                                      <rs-layer
                                        id={"slider-2-slide-6-layer-4"}
                                        data-type={"text"}
                                        data-color={"#d2d2d2"}
                                        data-xy={"yo:110px,110px,146px,96px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:20,20,17,15;l:36,36,30,24;"
                                        }
                                        data-dim={"w:570px,570px,460px,280px;"}
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"y:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:1050;sp:1000;sR:1050;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:6950;"}
                                        style={{
                                          zIndex: "7",
                                          fontFamily: "'Lato'",
                                        }}
                                      >
                                        {
                                          "Our proven, technical SEO will drive more organic traffic to your website and help you consequently increase your sales. \n\t\t\t\t\t\t\t\t"
                                        }
                                      </rs-layer>
                                      <rs-layer
                                        id={"slider-2-slide-6-layer-3"}
                                        data-type={"text"}
                                        data-xy={"yo:-14px;"}
                                        data-pos={"a"}
                                        data-text={
                                          "w:normal;s:82,82,58,36;l:90,90,70,42;fw:700;"
                                        }
                                        data-rsp_o={"off"}
                                        data-rsp_bd={"off"}
                                        data-frame_0={"x:50;"}
                                        data-frame_1={
                                          "e:back.inOut;st:800;sp:1000;sR:800;"
                                        }
                                        data-frame_999={"o:0;st:w;sR:7200;"}
                                        style={{
                                          zIndex: "6",
                                          fontFamily: "'Inter Tight'",
                                        }}
                                      >
                                        <div className={"text-gradient-top"}>
                                          {"AI & Robotic"}
                                          <span className={"text-box-gradient"}>
                                            {"s"}
                                          </span>
                                          <br />
                                          {"\nRevenue "}
                                          <span
                                            className={"text-gradient"}
                                            style={{
                                              "--gradient-color-from":
                                                "var(--brand-color)",
                                              "--gradient-color-to": "var(--brand-color)",
                                            }}
                                          >
                                            {"Today"}
                                          </span>
                                        </div>
                                      </rs-layer>
                                    </rs-group>
                                    <rs-layer
                                      id={"slider-2-slide-6-layer-0"}
                                      data-type={"shape"}
                                      data-rsp_ch={"on"}
                                      data-text={
                                        "w:normal;s:20,16,12,7;l:0,20,15,9;"
                                      }
                                      data-dim={"w:100%;h:100%;"}
                                      data-basealign={"slide"}
                                      data-frame_1={"sp:0;"}
                                      data-frame_999={"o:0;st:w;sR:9000;"}
                                      style={{
                                        zIndex: "6",
                                        backgroundColor: "rgba(0,0,0,0.78)",
                                      }}
                                    ></rs-layer>
                                  </rs-slide>
                                </rs-slides>
                              </rs-module>
                            </rs-module-wrap>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
