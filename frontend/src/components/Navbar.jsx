import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../ThemeContext";
import themes from "../constants/theme";
import SelectList from "./SelectList";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Extract the list of themes from the themes object
  const themeList = Object.keys(themes);

  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme.value);
  };

  // Update the currentTheme variable based on the selected theme
  const currentTheme = theme;
  console.log(currentTheme);

  return (
    <nav
      className={`${currentTheme.background} ${currentTheme.foreground} py-4 px-6 flex justify-between items-center shadow-md`}
    >
      <div className="text-2xl font-bold">
        <Link
          to="/"
          className={currentTheme.accent}
        >
          React-FastAPI
        </Link>
      </div>
      <div className="flex items-center">
        <SelectList
          options={themeList}
          value={currentTheme}
          onChange={handleThemeChange}
          className={`${currentTheme.primary} bg-transparent border-none focus:outline-none cursor-pointer`}
        />
        <Link
          to="/users"
          className={`${currentTheme.accent} hover:${currentTheme.primary} font-medium px-2 py-1 rounded-md ml-4`}
        >
          Users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
