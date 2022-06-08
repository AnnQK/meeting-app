import AddUserForm from './components/AddUserForm/AddUserForm';
import Header from './components/Layout/Header';
import UserList from './components/UserList/UserList';
import UsersContextProvider from './context/UsersContext';
import './App.css';

function App() {
  return (
    <UsersContextProvider>
      <div className="app">
        <Header />
        <AddUserForm />
        <UserList />
      </div>
    </UsersContextProvider>
  );
}

export default App;
