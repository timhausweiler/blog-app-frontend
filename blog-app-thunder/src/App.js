import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Home />
      <Routes>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:id" element={<UserDetail/>}/>
=======
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> a100202e999cb7f7f4db69bf0bda0c76b7d2c7ac
      </Routes>
    </div>
  );
}

export default App;
