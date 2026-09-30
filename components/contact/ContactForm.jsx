export default function ContactForm() {
  return (
    <>
      <form
        action={"/contact-us#wpcf7-f1514-p35-o1"}
        method={"post"}
        className={"wpcf7-form init"}
        aria-label={"Contact form"}
        noValidate={true}
        data-status={"init"}
      >
        <fieldset className={"hidden-fields-container"}>
          <input type={"hidden"} name={"_wpcf7"} defaultValue={"1514"} />
          <input
            type={"hidden"}
            name={"_wpcf7_version"}
            defaultValue={"6.1.6"}
          />
          <input
            type={"hidden"}
            name={"_wpcf7_locale"}
            defaultValue={"en_US"}
          />
          <input
            type={"hidden"}
            name={"_wpcf7_unit_tag"}
            defaultValue={"wpcf7-f1514-p35-o1"}
          />
          <input
            type={"hidden"}
            name={"_wpcf7_container_post"}
            defaultValue={"35"}
          />
          <input
            type={"hidden"}
            name={"_wpcf7_posted_data_hash"}
            defaultValue={""}
          />
        </fieldset>
        <div className={"row"}>
          <div className={"col-lg-6 col-md-6 col-sm-12"}>
            <div className={"pxl--item"}>
              <p>
                <span
                  className={"wpcf7-form-control-wrap"}
                  data-name={"your-fname"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"First name"}
                    defaultValue={""}
                    type={"text"}
                    name={"your-fname"}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 col-sm-12"}>
            <div className={"pxl--item"}>
              <p>
                <span
                  className={"wpcf7-form-control-wrap"}
                  data-name={"your-lname"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Last name"}
                    defaultValue={""}
                    type={"text"}
                    name={"your-lname"}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-lg-6 col-md-6 col-sm-12"}>
            <div className={"pxl--item"}>
              <p>
                <span
                  className={"wpcf7-form-control-wrap"}
                  data-name={"your-email"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Email address"}
                    defaultValue={""}
                    type={"email"}
                    name={"your-email"}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 col-sm-12"}>
            <div className={"pxl--item"}>
              <p>
                <span
                  className={"wpcf7-form-control-wrap"}
                  data-name={"your-service"}
                >
                  <select
                    className={"wpcf7-form-control wpcf7-select"}
                    aria-invalid={"false"}
                    name={"your-service"}
                  >
                    <option value={"Select service"}>{"Select service"}</option>
                    <option value={"Finance Consulting"}>
                      {"Finance Consulting"}
                    </option>
                    <option value={"Technology Consulting"}>
                      {"Technology Consulting"}
                    </option>
                    <option value={"Experience Consulting"}>
                      {"Experience Consulting"}
                    </option>
                  </select>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={"pxl--item"}>
          <p>
            <span
              className={"wpcf7-form-control-wrap"}
              data-name={"your-message"}
            >
              <textarea
                cols={"40"}
                rows={"10"}
                maxLength={"2000"}
                className={
                  "wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                }
                aria-required={"true"}
                aria-invalid={"false"}
                placeholder={"Type your message"}
                name={"your-message"}
              ></textarea>
            </span>
          </p>
        </div>
        <div className={"pxl--item"}>
          <p>
            <button className={"btn-submit wpcf7-submit"} type={"submit"}>
              <span className={"pxl--btn-text"} data-text={"Send Message"}>
                <span>{"S"}</span>
                <span>{"e"}</span>
                <span>{"n"}</span>
                <span>{"d"}</span>
                <span className={"spacer"}></span>
                <span>{"M"}</span>
                <span>{"e"}</span>
                <span>{"s"}</span>
                <span>{"s"}</span>
                <span>{"a"}</span>
                <span>{"g"}</span>
                <span>{"e"}</span>
              </span>
            </button>
          </p>
        </div>
        <div className={"wpcf7-response-output"} aria-hidden={"true"}></div>
      </form>
    </>
  );
}
