import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={"/signup"} element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
