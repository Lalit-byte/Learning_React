import { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";
import LanguageContext from "../Context/LanguageContext"
import translations from "../Translations/translations"

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext)
  const text = translations[language]

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <>
      <h1>{text.intro}</h1>
      <button onClick={changeTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};

export default ThemeButton;

