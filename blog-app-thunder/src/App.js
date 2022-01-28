import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserDetail';
import Signup from './screens/Signup/Signup';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
