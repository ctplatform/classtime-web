import styles from "./ScheduleGrid.module.scss";

function ScheduleGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.scheduleCol}>
          <div className={styles.rect}>Monday</div>
        </div>
        <div className={styles.vertline}></div>
        <div className={styles.scheduleCol}>
          <div className={styles.rect}>Tuesday</div>
        </div>
        <div className={styles.vertline}></div>
        <div className={styles.scheduleCol}>
          <div className={styles.rect}>Wednesday</div>
        </div>
        <div className={styles.vertline}></div>
        <div className={styles.scheduleCol}>
          <div className={styles.rect}>Thursday</div>
        </div>
        <div className={styles.vertline}></div>
        <div className={styles.scheduleCol}>
          <div className={styles.rect}>Friday</div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleGrid;
