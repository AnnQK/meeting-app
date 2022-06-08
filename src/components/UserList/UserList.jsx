import React, { useCallback, useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../context/UsersContext';
import Button from '../UI/Button';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

function UserList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { savedUsers, dispatch } = useContext(UsersContext);

  const fetchFromServer = useCallback(async () => {
    try {
      const response = await fetch(
        'https://meetind-app-default-rtdb.firebaseio.com/users.json'
      );
      if (!response.ok) {
        throw new Error('We have a problem...');
      }
      const data = await response.json();
      const updatedUsers = [];
      for (const key in data) {
        updatedUsers.unshift({
          id: key,
          userName: data[key].userName,
          userLogin: data[key].userLogin,
          preferences: data[key].preferences,
        });
      }
      dispatch({ type: 'FETCH_FROM_DB', users: updatedUsers });
    } catch (err) {
      alert(err.message);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchFromServer();
    }, 1000);
  }, [fetchFromServer]);

  return (
    <>
      <Button
        type="button"
        className={`nes-btn is-primary`}
        onClick={fetchFromServer}
      >
        Forse Update List
      </Button>
      {!isLoaded && (
        <div className="nes-container with-title is-centered">
          <p className="title">Message</p>
          <p>Users is Loading...</p>
        </div>
      )}
      {isLoaded && (
        <ul className={styles.list}>
          {savedUsers.map((item) => {
            return <UserItem key={item.id} user={item} />;
          })}
        </ul>
      )}
    </>
  );
}

export default UserList;
