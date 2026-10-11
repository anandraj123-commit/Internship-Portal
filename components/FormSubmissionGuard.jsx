import { useEffect } from "react";

export default function FormSubmissionGuard() {
  useEffect(() => {
    const preventSubmission = (event) => {
      if (event.target instanceof HTMLFormElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    document.addEventListener("submit", preventSubmission, true);
    return () => document.removeEventListener("submit", preventSubmission, true);
  }, []);

  return null;
}
