import styles from "./ScheduleGrid.module.scss";

function ScheduleGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.scheduleCol}>Monday</div>
        <div className={styles.scheduleCol}>Tuesday</div>
        <div className={styles.scheduleCol}>Wednesday</div>
        <div className={styles.scheduleCol}>Thursday</div>
        <div className={styles.scheduleCol}>Friday</div>
        <div className={styles.chatCol}>Chat Window</div>
      </div>
    </div>
  );
}

export default ScheduleGrid;
