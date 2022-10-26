import styles from "./courseblock.module.scss";

const CourseBlock = ({
  courseName,
  sectionNum,
  type,
  courseLength,
  courseQuantity,
  courseStart,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.highlight}></div>

      <div className={styles.main}>
        <div className={styles.info}>
          <p className={styles.name}>{courseName}</p>
          <p className={styles.section}>Section {sectionNum}</p>
        </div>

        <p className={styles.type}>{type}</p>
      </div>
    </div>
  );
};

export default CourseBlock;
