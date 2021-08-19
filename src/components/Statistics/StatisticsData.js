import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const StatisticsData = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {stats.map(({ label, percentage }) => (
        <li className={styles.item}>
          <span className={styles.label}>{label} </span>
          <span className={styles.quantity}>{percentage}% </span>
        </li>
      ))}
    </ul>
  );
};

StatisticsData.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsData;
