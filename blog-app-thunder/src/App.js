import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
<<<<<<< HEAD
import UserDetail from './screens/UserDetail';
=======
import UserDetail from './screens/UserList';
<<<<<<< HEAD
import Signup from './screens/Signup';
=======
>>>>>>> 707c861ef0a35ccce2d41796d7ab682c16fd8700
import Nav from './components/Nav/Nav';
>>>>>>> 1182c4de4b2bdf872ab9f24d128014897becf609

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
