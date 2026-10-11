import { services } from "../data/services";
import { useRouter } from "next/router";

function navItemClass(baseClass, isActive) {
  return `${baseClass}${isActive ? " current-menu-item current_page_item" : ""}`;
}

function InternshipDomainsMenu() {
  return (
    <ul className="sub-menu">
      {services.map(({ slug, title }) => (
        <li className="menu-item menu-item-type-custom menu-item-object-custom" key={slug}>
          <a href={`/service/${slug}`}>
            <span className="pxl-menu-item-text">{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar({ variant = 0 }) {
  const { pathname } = useRouter();
  const active = {
    home: pathname === "/",
    about: pathname === "/about-us",
    internship: pathname === "/service" || pathname.startsWith("/service/"),
    apply: pathname === "/apply-job",
    blog: pathname === "/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/category/"),
    contact: pathname === "/contact-us",
    testimonial: pathname === "/testimonial",
    faqs: pathname === "/faqs",
  };
  return [
    <>
      <div className={"menu-main-menu-container"}>
        <ul id={"menu-main-menu"} className={"pxl-menu-primary clearfix"}>
          <li
            id={"menu-item-6910"}
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6910", active.home)}
          >
            <a href={"/#"}>
              <span className={"pxl-menu-item-text"}>
                {"Home"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
          </li>
          <li
            id={"menu-item-6937"}
            className={navItemClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-6937", active.about)}
          >
            <a href={"/about-us"}>
              <span className={"pxl-menu-item-text"}>
                {"About Us"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
          </li>
          <li
            id={"menu-item-6908"}
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6908", active.internship)}
          >
            <a href={"/service"}>
              <span className={"pxl-menu-item-text"}>
                {"Internship"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
            <InternshipDomainsMenu />
          </li>
          <li className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-apply-job", active.apply)}>
            <a href="/apply-job">
              <span className="pxl-menu-item-text">Apply</span>
            </a>
          </li>
          <li
            id={"menu-item-6906"}
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6906", active.blog)}
          >
            <a href={"/blog"}>
              <span className={"pxl-menu-item-text"}>
                {"Blog"}
              </span>
            </a>
          </li>
          <li
            id={"menu-item-6905"}
            className={
              "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6905"
            }
          >
            <a href={"/#"}>
              <span className={"pxl-menu-item-text"}>
                {"Pages"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
            <ul className={"sub-menu"}>
              <li
                id={"menu-item-6929"}
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6929${active.apply ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/apply-job"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Job Apply"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                id={"menu-item-6938"}
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6938${active.contact ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/contact-us"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Contact Us"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                id={"menu-item-6933"}
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6933${active.testimonial ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/testimonial"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Testimonial"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                id={"menu-item-6932"}
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6932${active.faqs ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/faqs"}>
                  <span className={"pxl-menu-item-text"}>
                    {"FAQs"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>,
    <>
      <div className={"menu-main-menu-container"}>
        <ul id={"menu-main-menu-1"} className={"pxl-menu-primary clearfix"}>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6910", active.home)}
          >
            <a href={"/#"}>
              <span className={"pxl-menu-item-text"}>
                {"Home"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-6937", active.about)}
          >
            <a href={"/about-us"}>
              <span className={"pxl-menu-item-text"}>
                {"About Us"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6908", active.internship)}
          >
            <a href={"/service"}>
              <span className={"pxl-menu-item-text"}>
                {"Internship"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
            <InternshipDomainsMenu />
          </li>
          <li className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-apply-job", active.apply)}>
            <a href="/apply-job">
              <span className="pxl-menu-item-text">Apply</span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6906", active.blog)}
          >
            <a href={"/blog"}>
              <span className={"pxl-menu-item-text"}>
                {"Blog"}
              </span>
            </a>
          </li>
          <li
            className={
              "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6905"
            }
          >
            <a href={"/#"}>
              <span className={"pxl-menu-item-text"}>
                {"Pages"}
                <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                <span className={"pxl-item-menu-icon pxl-hide "}></span>
              </span>
            </a>
            <ul className={"sub-menu"}>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6929${active.apply ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/apply-job"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Job Apply"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6938${active.contact ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/contact-us"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Contact Us"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6933${active.testimonial ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/testimonial"}>
                  <span className={"pxl-menu-item-text"}>
                    {"Testimonial"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6932${active.faqs ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/faqs"}>
                  <span className={"pxl-menu-item-text"}>
                    {"FAQs"}
                    <i className={"caseicon-angle-arrow-down pxl-hide"}></i>
                    <span className={"pxl-item-menu-icon pxl-hide "}></span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>,
    <>
      <nav className={"pxl-header-nav"}>
        <ul id={"menu-main-menu-2"} className={"pxl-menu-primary clearfix"}>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6910", active.home)}
          >
            <a href={"/#"}>
              <span>{"Home"}</span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-6937", active.about)}
          >
            <a href={"/about-us"}>
              <span>{"About Us"}</span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6908", active.internship)}
          >
            <a href={"/service"}>
              <span>{"Internship"}</span>
            </a>
            <InternshipDomainsMenu />
          </li>
          <li className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-apply-job", active.apply)}>
            <a href="/apply-job">
              <span className="pxl-menu-item-text">Apply</span>
            </a>
          </li>
          <li
            className={navItemClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-6906", active.blog)}
          >
            <a href={"/blog"}>
              <span>{"Blog"}</span>
            </a>
          </li>
          <li
            className={
              "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6905"
            }
          >
            <a href={"/#"}>
              <span>{"Pages"}</span>
            </a>
            <ul className={"sub-menu"}>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6929${active.apply ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/apply-job"}>
                  <span>{"Internship Apply"}</span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6938${active.contact ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/contact-us"}>
                  <span>{"Contact Us"}</span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6933${active.testimonial ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/testimonial"}>
                  <span>{"Testimonial"}</span>
                </a>
              </li>
              <li
                className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-6932${active.faqs ? " current-menu-item current_page_item" : ""}`}
              >
                <a href={"/faqs"}>
                  <span>{"FAQs"}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>,
  ][variant];
}
