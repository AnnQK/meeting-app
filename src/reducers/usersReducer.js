import { sendToServer } from '../helpers/sendHTTP';

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_DB':
      sendToServer(action.user).then((res) => console.log(res));
      return state;
    // case 'FETCH_FROM_DB':
    //   fetchFromServer()
    //     .then((res) => {
    //       state = res;
    //     })
    //     .then((st) => {
    //       return st;
    //     });
    case 'FETCH_FROM_DB':
      return action.users;
  }
};
