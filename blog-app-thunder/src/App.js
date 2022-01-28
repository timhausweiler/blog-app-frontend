import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       <Routes>
=======
      <Link to="/users">Users</Link>

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
