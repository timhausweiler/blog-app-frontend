import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import UserList from './screens/UserList';
import UserDetail from './screens/UserDetail';
import Signup from './screens/Signup/Signup';

import UserEdit from './screens/UserEdit';
import CreatePost from './screens/CreatePost/CreatePost';
import BlogPosts from './screens/BlogPosts/BlogPosts';
import BlogPost from './screens/BlogPost/BlogPost';
import EditPost from './screens/EditPost/EditPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/posts" element={<BlogPosts/>}/>
        <Route path="/post/:id" element={<BlogPost/>}/>
        <Route path="/edit-post/:id" element={<EditPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
