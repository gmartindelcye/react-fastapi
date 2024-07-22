import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const HomePage = () => {
  const { theme, themes } = useContext(ThemeContext);
  console.log(theme, themes);
  const currentTheme = themes[theme];

  return (
    <div
      className={`${currentTheme.background} min-h-screen w-full ${currentTheme.foreground} p-8`}
    ></div>
  );
};

export default HomePage;
