import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserList() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/delete/${id}`)
    navigate("/users")
  }

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/api/user/${id}`);
      // console.log(id)
      // console.log(res.data.data.user);
      setUser(res.data.data.user);
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      <h2>This is {user.userName}</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.member_since}</p>
      <Link to={`/api/update/${user.userName}`}><button>Edit user</button></Link>
      <button onClick = {handleDelete}>Delete user</button>
    </div>
  )
}
