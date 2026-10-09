export const applicationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd2LVgTWeNovtj2WUcrP9Fvqr60SLUD0hGFlzKukv2ipSq2Qw/viewform";

export default function ApplyButton({ overlay = false }) {
  return (
    <a
      className={`course-apply-button${overlay ? " course-apply-overlay" : ""}`}
      href={applicationUrl}
    >
      Apply Now
    </a>
  );
}
