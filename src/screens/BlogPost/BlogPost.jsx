import "./BlogPost.css";
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function BlogPost() {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await axios.delete(`https://kkt-backend.herokuapp.com/blog-api/delete/${id}`)
        navigate("/posts")
      }

    useEffect(() => {
        const fetchPost = async()=>{
            const res = await axios.get(`https://kkt-backend.herokuapp.com/blog-api/post/${id}`);
            setPost(res.data.data.user);
        }
        fetchPost();
    }, [id])

  return (
    <div>
        <Nav/>
        <div>
            <h3>{post.userName}</h3>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <Link to={`/edit-post/${id}`}><button>Edit Post</button></Link>
            <button onClick = {handleDelete}>Delete Post</button>
        </div>        
    </div>
    );
}
