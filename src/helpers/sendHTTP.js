export async function sendToServer(userInfo) {
  const res = await fetch(
    'https://meetind-app-default-rtdb.firebaseio.com/users.json',
    {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  const savedUsers = [];
  for (const key in data) {
    savedUsers.push({
      id: key,
      userName: data[key].userName,
      userLogin: data[key].userLogin,
      preferences: data[key].preferences,
    });
  }
}
// export async function fetchFromServer() {
//   const response = await fetch(
//     'https://meetind-app-default-rtdb.firebaseio.com/users.json'
//   );
//   const data = await response.json();
//   const savedUsers = [];
//   for (const key in data) {
//     savedUsers.push({
//       id: key,
//       userName: data[key].userName,
//       userLogin: data[key].userLogin,
//       preferences: data[key].preferences,
//     });
//   }
//   return savedUsers;
// }
