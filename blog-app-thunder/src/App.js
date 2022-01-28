import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
       <Routes>
=======
      <Link to="/users">Users</Link>
=======
      <Nav />
>>>>>>> 41da971c843971578c2e6b341396702d8cf3386b

      <Routes>
>>>>>>> 3218d93ca0cc42e05c11c65e348a81b64a22c521
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
