import styles from "./courseblock.module.scss";

function CourseBlock({
  courseName,
  section,
  type,
  color,
}: {
  courseName: string;
  section: number;
  type: string;
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

        <span className={styles.type}>{type}</span>
      </div>
    </div>
  );
}

export default CourseBlock;
