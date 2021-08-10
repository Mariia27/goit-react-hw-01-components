import React from "react";
import PropTypes from "prop-types";
import Friends from "./Friends";
import styles from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => (
        <Friends
          key={item.id}
          isOnline={item.isOnline}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
