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
        <div className={styles.info}>
          <p className={styles.name}>{courseName}</p>
          <p className={styles.section}>Section {section}</p>
        </div>

        <p className={styles.type}>{type}</p>
      </div>
    </div>
  );
}

export default CourseBlock;
