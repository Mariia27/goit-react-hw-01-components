import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";
import StatisticsData from "./StatisticsData";
const Statistics = ({ title, stats }) => {
  // console.log(props);
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatisticsData stats={stats} />
      {/* <ul className={styles.statList}>
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
      </ul> */}
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default Statistics;
