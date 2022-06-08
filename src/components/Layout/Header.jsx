import React, { useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import styles from './Header.module.css';
import 'nes.css/css/nes.min.css';
function Header() {
  const { savedUsers } = useContext(UsersContext);
  return (
    <div className={`nes-text is-primary header ${styles.header}`}>
      <h1>There are {savedUsers.length} users joined</h1>
    </div>
  );
}

export default Header;
