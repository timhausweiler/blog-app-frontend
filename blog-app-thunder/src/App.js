import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserDetail';
import Signup from './screens/Signup';
import Nav from './components/Nav/Nav';
import UserEdit from './screens/UserEdit';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/edit/:userName" element={<UserEdit />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
