import { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";
import ThemeButton from "../Components/ThemeButton";
import "../CSS/Pages.css";
import LanguageContext from "../Context/LanguageContext"
import translations from "../Translations/translations"

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext)
  const text = translations[language]

  return (
    <>
      <div className={`page ${theme}`}>
        <h1>{text.welcome}</h1>
        <h2>{text.home}</h2>
        <ThemeButton />
      </div>
    </>
  );
};

export default Home;
