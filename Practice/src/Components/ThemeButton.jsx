import { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <>
      <h1>Theme Change Using Context api </h1>
      <button onClick={changeTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};

export default ThemeButton;

