import styles from "./courseblock.module.scss";

function CourseBlock({
  courseName,
  section,
  blockType,
  color,
}: {
  courseName: string;
  section: number;
  blockType: string;
  color: string;
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.highlight}
        style={{ backgroundColor: color }}
      ></div>

      <div className={styles.text}>
        <span className={styles.name}>{courseName}</span>
        <span className={styles.section}>Section {section}</span>

        <span className={styles.blocktype}>{blockType}</span>
      </div>
    </div>
  );
}

export default CourseBlock;
