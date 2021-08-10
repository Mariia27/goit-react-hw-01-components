import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
const Friends = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friends.propTypes = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friends;
