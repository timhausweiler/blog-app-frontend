import "./BlogPosts.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3000/blog-api/posts');
      // console.log(res.data.data)
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Nav/>
      <div>
        {posts.map((post, i)=>{
          return(
            <Link to={`/post/${post._id}`} key={i}>
              <div>
                <h3>{post.userName}</h3>
                <h4>{post.title}</h4>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
