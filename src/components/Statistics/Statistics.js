import React from "react";
import styles from "./Statistics.module.css";
const Statistics = (props) => {
  console.log(props);
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        <li className={styles.item}>
          <span className={styles.label}>.docx</span>
          <span className={styles.percentage}>4%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp3</span>
          <span className={styles.percentage}>14%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.pdf</span>
          <span className={styles.percentage}>41%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>.mp4</span>
          <span className={styles.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
};
export default Statistics;
