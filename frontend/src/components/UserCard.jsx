import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const UserCard = ({ user, onDelete }) => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div className={`${currentTheme.boxColor} rounded-lg shadow-lg p-6 mb-8`}>
      <div>
        <h2 className="text-lg font-bold">{user.username}</h2>
        <p
          className={`w-[55%] text-sm ${currentTheme.secondary} mt-2 overflow-hidden overflow-ellipsis whitespace-pre-wrap`}
        >
          {user.password}
        </p>
      </div>
      <button
        onClick={() => onDelete(user.id)}
        className={`${currentTheme.danger.background} ${currentTheme.danger.foreground} rounded-lg px-3 py-2 transition-colors duration-300 mt-4 self-end`}
      >
        Delete
      </button>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
