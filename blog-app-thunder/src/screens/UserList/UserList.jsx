import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://kkt-backend.herokuapp.com/api/users"
      );
      console.log(res);
      console.log(res.data.data);
      setUsers(res.data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Nav />
      <h2>Overview of all users!</h2>
      {users?.map((user, index) => {
        return (
          <Link to={`/user/${user._id}`} key={index}>
            <div>
              <h3>{user.userName}</h3>
              <p>{user.email}</p>
              <img src={user.avatar} alt="avatar" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
