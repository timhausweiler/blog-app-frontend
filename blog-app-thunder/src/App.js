import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserList';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/api/users" element={<UserList/>}/>
        <Route path="/api/user/:id" element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
