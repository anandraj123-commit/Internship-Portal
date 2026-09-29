import { services } from "../../data/services";

export default function ServiceCards() {
  return (
    <div className="pxl-grid-inner pxl-grid-masonry row" data-gutter="15">
      {services.map((service) => (
        <div
          key={service.id}
          className="pxl-grid-item col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
        >
          <div
            className="pxl-post--inner pxl-overlay-shake wow fadeInUp"
            data-wow-duration={service.card.animationDuration}
          >
            <div className="pxl-overlay--color" />
            <div className="pxl-post--icon">
              <i className={service.icon} />
            </div>
            <h3 className="pxl-post--title">
              <a href={service.href}>{service.title}</a>
            </h3>
            <div className="pxl-post--content">{service.card.description}</div>
            <div className="pxl-post--readmore">
              <a className="btn-readmore-1" href={service.href}>
                <span>{service.card.readMoreLabel}</span>
                <i className={service.card.readMoreIcon} />
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="grid-sizer col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" />
    </div>
  );
}
