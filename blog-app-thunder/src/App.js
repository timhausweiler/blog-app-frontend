import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';
<<<<<<< HEAD
import Signup from './screens/Signup';
=======
import Nav from './components/Nav/Nav';
>>>>>>> 1182c4de4b2bdf872ab9f24d128014897becf609

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
