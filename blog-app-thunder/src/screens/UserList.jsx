import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/api/users");
      setUsers(res.data.records);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Overview of all users</h2>
      {users.map((user, index) => {
        return (
          <Link to={`/user/${user.id}`}  key = {index}>
            <div>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </div>
          </Link>
        );
      })}
    </div>
  )
}
