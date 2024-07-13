import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const HomePage = () => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  return (
    <div
      className={`${currentTheme.background} min-h-screen w-full ${currentTheme.foreground} p-8`}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">This is the Home page content.</p>
      {/* Add your home page-related content here */}
    </div>
  );
};

export default HomePage;
