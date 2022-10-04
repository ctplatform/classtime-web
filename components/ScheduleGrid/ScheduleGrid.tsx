// ScheduleGrid.tsx
import styles from "./ScheduleGrid.module.scss";

function ScheduleGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>Monday</div>
        <div className={styles.col}>Tuesday</div>
        <div className={styles.col}>Wednesday</div>
        <div className={styles.col}>Thursday</div>
        <div className={styles.col}>Friday</div>
      </div>
    </div>
  );
}

export default ScheduleGrid;
