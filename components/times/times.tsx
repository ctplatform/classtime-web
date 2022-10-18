// import styles from "../styles/Home.module.scss";
import styles from "./times.module.scss";

// each row will be a part of the column and we will build the column down
function Times() {
  return (
    <div className={styles.container}>
      <div className={styles.scheduleRow}>
        <div className={styles.col}>
          <div className={styles.rect}>8am</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>9am</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>10am</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>11am</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>12pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>1pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>2pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>3pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>4pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>5pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>6pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>7pm</div>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.col}>
          <div className={styles.rect}>8pm</div>
        </div>
      </div>
    </div>
  );
}

export default Times;
