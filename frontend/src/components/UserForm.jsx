import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const UserForm = ({ onSubmit }) => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div
      className={`rounded-lg shadow-lg p-6 mb-8 items-center ${currentTheme.boxColor}`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create User</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <div>
          <label
            htmlFor="username"
            className={`block font-medium ${currentTheme.accent} mb-2`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${currentTheme.secondary}`}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className={`block font-medium ${currentTheme.accent} mb-2`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${currentTheme.secondary}`}
          />
        </div>
        <button
          type="submit"
          className={`${currentTheme.success.background} ${currentTheme.success.foreground} font-medium py-2 px-4 rounded-lg w-full`}
        >
          Create User
        </button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
