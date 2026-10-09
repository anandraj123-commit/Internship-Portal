import usePost from "./usePost";
import OriginalComments from "./OriginalComments";
export default function Comments() {
  const post = usePost();
  return (
    <>
      <div id={"comments"} className={"comments-area"}>
        {post.id === 709 && <OriginalComments />}
        <div id={"respond"} className={"comment-respond"}>
          <h3 id={"reply-title"} className={"comment-reply-title"}>
            {"Leave A Comment "}
            <small>
              <a
                rel={"nofollow"}
                id={"cancel-comment-reply-link"}
                href={"#respond"}
                style={{ display: "none" }}
              >
                {"Cancel Comment"}
              </a>
            </small>
          </h3>
          <form
            action={"https://radhikaskillforge.apurvasoftwaresolutions.com/wp-comments-post.php"}
            method={"post"}
            id={"commentform"}
            className={"comment-form"}
          >
            <div className={"row"}>
              <div
                className={"comment-form-author col-lg-6 col-md-6 col-sm-12"}
              >
                <input
                  id={"author"}
                  name={"author"}
                  type={"text"}
                  defaultValue={""}
                  size={"30"}
                  placeholder={"Your Name"}
                />
              </div>
              <div className={"comment-form-email col-lg-6 col-md-6 col-sm-12"}>
                <input
                  id={"email"}
                  name={"email"}
                  type={"text"}
                  defaultValue={""}
                  size={"30"}
                  placeholder={"Email Address"}
                />
              </div>
              <div className={"comment-form-phone col-lg-6 col-md-6 col-sm-12"}>
                <input
                  id={"phone"}
                  name={"phone"}
                  type={"text"}
                  defaultValue={""}
                  size={"30"}
                  placeholder={"Phone Number"}
                />
              </div>
              <div
                className={"comment-form-website col-lg-6 col-md-6 col-sm-12"}
              >
                <input
                  id={"website"}
                  name={"url"}
                  type={"text"}
                  defaultValue={""}
                  size={"30"}
                  placeholder={"Website"}
                />
              </div>
            </div>
            <p className={"comment-form-cookies-consent"}>
              <input
                id={"wp-comment-cookies-consent"}
                name={"wp-comment-cookies-consent"}
                type={"checkbox"}
                defaultValue={"yes"}
              />
              <label htmlFor={"wp-comment-cookies-consent"}>
                {
                  "Save my name, email, and website in this browser for the next time I comment."
                }
              </label>
            </p>
            <div className={"comment-form-comment"}>
              <textarea
                id={"comment"}
                name={"comment"}
                cols={"45"}
                rows={"8"}
                placeholder={"Your Comment..."}
                aria-required={"true"}
              ></textarea>
            </div>
            <p className={"form-submit"}>
              <button
                name={"submit"}
                type={"submit"}
                id={"submit"}
                className={"btn-submit"}
              >
                {"Post Comment"}
              </button>
              <input
                type={"hidden"}
                name={"comment_post_ID"}
                defaultValue={post.id}
                id={"comment_post_ID"}
              />
              <input
                type={"hidden"}
                name={"comment_parent"}
                id={"comment_parent"}
                defaultValue={"0"}
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
