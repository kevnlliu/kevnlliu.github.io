import styles from "./ResumePage.module.css";
import resume from "./resume.pdf";

const ResumePage = () => {
  return (
    <div id={styles["resume-page"]}>
      <h1 id={styles["resume-page-title"]}>Resume</h1>
      <object
        data={resume}
        type="application/pdf"
        id={styles["resume-page-resume"]}
      />
    </div>
  );
};

export default ResumePage;
