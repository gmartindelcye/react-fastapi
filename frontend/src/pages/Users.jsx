import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      await axios.post("http://localhost:8000/api/v1/users", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await axios.get("http://localhost:8000/api/v1/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div
      className={`${currentTheme.background} min-h-screen w-full ${currentTheme.foreground} p-8`}
    >
      <UserForm onSubmit={handleCreateUser} />
      <h1 className="text-4xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
