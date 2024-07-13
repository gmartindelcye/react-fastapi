import PropTypes from "prop-types";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="bg-purple-400 rounded-lg p-4 flex flex-col justify-between items-start">
      <div>
        <h2 className="text-lg font-bold">{user.username}</h2>
        <p className="w-[55%] text-sm text-gray-200 mt-2 overflow-hidden overflow-ellipsis whitespace-pre-wrap">
          {user.password}
        </p>
      </div>
      <button
        onClick={() => onDelete(user.id)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-2 transition-colors duration-300 mt-4 self-end"
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
