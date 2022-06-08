import React from 'react';
import styles from './UserItem.module.css';

function UserItem({ user }) {
  return (
    <li className={`${styles.item} nes-container is-rounded`}>
      <h2 className={`nes-text is-primary`}>{user.userName}</h2>
      <h2 className={`nes-text is-success`}>{user.userLogin}</h2>
      <p>{user.preferences}</p>
    </li>
  );
}

export default UserItem;
