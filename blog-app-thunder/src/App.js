import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserDetail';
<<<<<<< HEAD
import Signup from './screens/Signup/Signup';
=======
import Signup from './screens/Signup';
>>>>>>> 41743f7c117409847d0a6caa9276a0de9b35f810
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
