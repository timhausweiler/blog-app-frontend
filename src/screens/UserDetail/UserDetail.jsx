import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';

export default function UserList() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    await axios.delete(`https://kkt-backend.herokuapp.com/api/delete/${id}`)
    navigate("/users")
  }


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://kkt-backend.herokuapp.com/api/user/${id}`);
      // console.log(id)
      // console.log(res.data.data.user);
      setUser(res.data.data.user);
    };
    fetchUser();
  }, [id]);

  return (
    <div>
      <Nav />
      <h2>This is {user.userName}</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.member_since}</p>
      <Link to={`/edit/${id}`}>
        <button>Edit user</button>
      </Link>
      <button onClick={handleDelete}>Delete user</button>
    </div>
  );
}
