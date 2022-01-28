import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';

function App() {
  return (
    <div className="App">
      <Link to="/users">Users</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
