export default function ServiceFaqs({ service }) {
  return (
    <div className="pxl-accordion pxl-accordion1 style1 " data-wow-delay="ms">
      {service.faqs.map((faq, index) => {
        const id = faq.id || `faq-${service.slug}-${index + 1}`;
        return (
          <div
            key={id}
            className={faq.initiallyOpen ? "pxl--item active" : "pxl--item "}
          >
            <h5 className="pxl-accordion--title" data-target={`#${id}`}>
              <span className="pxl-title--text pxl-pr-20">{faq.question}</span>
              <i className="pxl-icon--plus pxl-r-15" />
            </h5>
            <div
              id={id}
              className="pxl-accordion--content"
              style={faq.initiallyOpen ? { display: "block" } : undefined}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
