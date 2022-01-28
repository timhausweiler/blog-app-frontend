import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users");
      // console.log(res.data.data)
      setUsers(res.data.data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Overview of all users</h2>
      {users.map((user, index) => {
        return (
          <Link to={`/user/${user._id}`}  key = {index}>
            <div>
              <h3>{user.userName}</h3>
              <p>{user.email}</p>
            </div>
          </Link>
        );
      })}
    </div>
  )
}
