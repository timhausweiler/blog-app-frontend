import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';

function App() {
  return (
    <div className="App">

    
      <Routes>
<<<<<<< HEAD
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:id" element={<UserDetail/>}/>
=======
      <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> a100202e999cb7f7f4db69bf0bda0c76b7d2c7ac
      </Routes>
=======
      <Route path="/" element={<Home />} />
        <Route path="/api/users" element={<UserList/>}/>
        <Route path="/api/user/:id" element={<UserDetail/>}/>
        </Routes>

>>>>>>> 69b8cdecae1638ef5f1c37850d3ad4fdd92b7333
    </div>
  );
}

export default App;
