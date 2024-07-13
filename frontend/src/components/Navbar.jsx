import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "shadcn/ui";
import { ThemeContext } from "../ThemeContext";
import themes from "../constants/theme";

const Navbar = () => {
  const { theme, toggleTheme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

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
        <Select>
          <SelectTrigger
            className={`${currentTheme.accent} hover:${currentTheme.primary} font-medium px-2 py-1 rounded-md`}
          >
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(themes).map((themeKey) => (
              <SelectItem
                key={themeKey}
                value={themeKey}
                onClick={() => toggleTheme(themeKey)}
                className={`${themes[themeKey].accent} hover:${themes[themeKey].primary} font-medium px-2 py-1 rounded-md`}
              >
                {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
