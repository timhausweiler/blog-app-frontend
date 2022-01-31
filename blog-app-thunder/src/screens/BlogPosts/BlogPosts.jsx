import "./BlogPosts.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3000/api/posts');
      // console.log(res.data.data)
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        {posts.map((post, i)=>{
          return(
            <div key={i}>
              <h3>{post.userName}</h3>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
