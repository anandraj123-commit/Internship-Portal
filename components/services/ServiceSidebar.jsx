import { services } from "../../data/services";
export default function ServiceSidebar({ service }) {
  return (
    <div className="pxl-link-wrap">
      <h3 className="pxl-widget-title pxl-empty">Main Services</h3>
      <ul className="pxl-link pxl-link-l1 style-box-gradient type-vertical">
        {services.map((item) => (
          <li
            key={item.slug}
            className={`pxl-item--link ${item.slug === service.slug ? "active" : ""}`}
          >
            <a
              href={item.href}
              aria-current={item.slug === service.slug ? "page" : undefined}
            >
              <i aria-hidden="true" className="flaticon flaticon-star" />
              <span>{item.title}</span>
              <span className="pxl-item--divider" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
