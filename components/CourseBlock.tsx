import styles from "./CourseBlock.module.scss";

function CourseBlock({
  // these are props that will be used to update the views
  // based on what the backend returns and the informations
  // regarding the courses with their respective names, sections,
  // what type of course it is and the color to highlight it
  // will be stored in the database
  courseName,
  section,
  blockType,
  color,
}: {
  // the types regarding the props
  courseName: string;
  section: number;
  blockType: string;
  color: string;
}) {
  return (
    // this is the div surrounding the entire
    // courseblock for the styling to align the content
    <div className={styles.container}>
      <div
        // this is the color highlight of the specific block
        className={styles.highlight}
        style={{ backgroundColor: color }}
      ></div>

      {/* this is the course information */}
      <div className={styles.text}>
        <span className={styles.name}>{courseName}</span>
        <span className={styles.section}>Section {section}</span>

        <span className={styles.blocktype}>{blockType}</span>
      </div>
    </div>
  );
}

export default CourseBlock;
