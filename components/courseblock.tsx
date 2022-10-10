import styles from "./courseblock.module.scss";

const CourseBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlight}></div>

      <div className={styles.main}>
        <div className={styles.info}>
          <p className={styles.name}>Computer Science I</p>
          <p className={styles.section}>Section 7</p>
        </div>

        <p className={styles.type}>Lecture</p>
      </div>
    </div>
  );
};

export default CourseBlock;
