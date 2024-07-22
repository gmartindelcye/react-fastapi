import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import SelectList from "./SelectList";

const Navbar = () => {
  const { theme, toggleTheme, themes } = useContext(ThemeContext);
  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme.value);
  };

  // Extract the list of themes from the themes object
  const themeList = Object.keys(themes);
  const themeDefault = themeList.find((t) => t === theme);
  const currentTheme = themes[themeDefault];

  return (
    <nav
      className={`${currentTheme.boxColor} py-4 px-6 flex justify-between items-center shadow-md`}
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
          value={themeDefault}
          onChange={handleThemeChange}
          className={`focus:outline-none cursor-pointer`}
          menuIsOpen
        />
        <Link
          to="/users"
          className={`${currentTheme.accent} hover:${currentTheme.primary} font-medium px-2 py-1 rounded-md ml-4`}
        >
          Users
        </Link>
        <Link
          to="/nodes"
          className={`${currentTheme.accent} hover:${currentTheme.primary} font-medium px-2 py-1 rounded-md ml-4`}
        >
          Nodes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
