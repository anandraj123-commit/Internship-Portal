import Root from "../components/Root";
import ApplyJobPage from "../components/apply-job/Page";
import PageStyles from "../components/apply-job/PageStyles";

export default function ApplyJob() {
  return (
    <Root pageKey="applyJob" Styles={PageStyles} title="Job Apply | IT Agency">
      <ApplyJobPage />
    </Root>
  );
}
