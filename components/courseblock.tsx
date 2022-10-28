import styles from "./courseblock.module.scss";

function CourseBlock({
  courseName,
  section,
  type,
}: {
  courseName: string;
  section: number;
  type: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.highlight}></div>

      <div className={styles.main}>
        <span className={styles.name}>{courseName}</span>
        <span className={styles.section}>Section {section}</span>

        <span className={styles.type}>{type}</span>
      </div>
    </div>
  );
}

export default CourseBlock;
