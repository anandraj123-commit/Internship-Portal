export default function ApplicationForm() {
  return (
    <>
      <form
        action={"//apply-job#wpcf7-f1918-p1151-o1"}
        method={"post"}
        className={"wpcf7-form init"}
        aria-label={"Contact form"}
        enctype={"multipart/form-data"}
        noValidate={true}
        data-status={"init"}
      >
        <fieldset className={"hidden-fields-container"}>
          <input type={"hidden"} name={"_wpcf7"} defaultValue={"1918"} />
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
            defaultValue={"wpcf7-f1918-p1151-o1"}
          />
          <input
            type={"hidden"}
            name={"_wpcf7_container_post"}
            defaultValue={"1151"}
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
                <span className={"wpcf7-form-control-wrap"} data-name={"fname"}>
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
                    name={"fname"}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className={"col-lg-6 col-md-6 col-sm-12"}>
            <div className={"pxl--item"}>
              <p>
                <span className={"wpcf7-form-control-wrap"} data-name={"lname"}>
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
                    name={"lname"}
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
                <span className={"wpcf7-form-control-wrap"} data-name={"phone"}>
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Phone number"}
                    defaultValue={""}
                    type={"text"}
                    name={"phone"}
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
                  data-name={"location"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Location (City)"}
                    defaultValue={""}
                    type={"text"}
                    name={"location"}
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
                <span className={"wpcf7-form-control-wrap"} data-name={"email"}>
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
                    name={"email"}
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
                  data-name={"position"}
                >
                  <select
                    className={"wpcf7-form-control wpcf7-select"}
                    aria-invalid={"false"}
                    name={"position"}
                  >
                    <option value={"Position"}>{"Position"}</option>
                    <option value={"WordPress Development"}>
                      {"WordPress Development"}
                    </option>
                    <option value={"HTML/CSS"}>{"HTML/CSS"}</option>
                    <option value={"Designer"}>{"Designer"}</option>
                    <option value={"Marketers"}>{"Marketers"}</option>
                    <option value={"Supporter"}>{"Supporter"}</option>
                  </select>
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
                  data-name={"weblink"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Portfolio / Website link.."}
                    defaultValue={""}
                    type={"text"}
                    name={"weblink"}
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
                  data-name={"salary"}
                >
                  <input
                    size={"40"}
                    maxLength={"400"}
                    className={
                      "wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    }
                    aria-required={"true"}
                    aria-invalid={"false"}
                    placeholder={"Your expected salary"}
                    defaultValue={""}
                    type={"text"}
                    name={"salary"}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={"pxl--item"}>
          <h4 className={"wpcf7-heading"}>{"Upload CV\n\t"}</h4>
          <p>
            <span className={"wpcf7-form-control-wrap"} data-name={"your-file"}>
              <input
                size={"40"}
                className={"wpcf7-form-control wpcf7-file"}
                accept={".gif,.jpg,.jpeg,.png,.pdf,.txt"}
                aria-invalid={"false"}
                type={"file"}
                name={"your-file"}
              />
            </span>
          </p>
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
                placeholder={"Cover letter"}
                name={"your-message"}
              ></textarea>
            </span>
          </p>
        </div>
        <div className={"pxl--item pxl-text-center"}>
          <p>
            <button className={"btn-submit wpcf7-submit"} type={"submit"}>
              <span className={"pxl--btn-text"} data-text={"Submit Now"}>
                <span>{"S"}</span>
                <span>{"u"}</span>
                <span>{"b"}</span>
                <span>{"m"}</span>
                <span>{"i"}</span>
                <span>{"t"}</span>
                <span className={"spacer"}></span>
                <span>{"N"}</span>
                <span>{"o"}</span>
                <span>{"w"}</span>
              </span>
            </button>
          </p>
        </div>
        <div className={"wpcf7-response-output"} aria-hidden={"true"}></div>
      </form>
    </>
  );
}
