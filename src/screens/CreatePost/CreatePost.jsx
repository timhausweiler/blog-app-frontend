import "./CreatePost.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const default_input = {
    userName: "",
    title: "",
    content: "",
    imgUrl: ""
  }

export default function CreatePost() {
    const [input, setInput] = useState(default_input);
    let navigate = useNavigate();

    const handleTextInput = (event) =>{
        const {id, value} = event.target;
        setInput((prevInput)=>({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const fields = input;
        console.log(fields);
        await axios.post("https://kkt-backend.herokuapp.com/blog-api/create", fields);
        setInput(default_input);
        navigate("/posts");
      }

  return (
      <div>
        <Nav/>
        <form onSubmit={handleSubmit} id="postForm">
            <label htmlFor="userName">Username</label>
            <input type="text" value={input.userName} id='userName' onChange={handleTextInput} required/>
            <label htmlFor="imgUrl">Thumbnail</label>
            <input type="text" value={input.imgUrl} id='imgUrl' onChange={handleTextInput}/>
            <label htmlFor="title">Title</label>
            <input type="text" value={input.title} id='title' onChange={handleTextInput} required/>
            <label htmlFor="content">Content</label>
            <textarea type="text" value={input.content} id='content' onChange={handleTextInput} required/>
            <button>Submit</button>
        </form>
      </div>
  )
}
