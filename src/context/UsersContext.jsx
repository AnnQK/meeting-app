import React, { useEffect, useReducer } from 'react';
import { usersReducer } from '../reducers/usersReducer';

export const UsersContext = React.createContext();

function UsersContextProvider(props) {
  const [savedUsers, dispatch] = useReducer(usersReducer, []);
  return (
    <UsersContext.Provider value={{ savedUsers, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContextProvider;
