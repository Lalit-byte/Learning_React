import { useContext } from "react"; // used to use created context api
import ThemeContext from "../ContextAPI/ThemeContext"; // importing ThemeContext that we created at the initialization
import ThemeButton from "../Components/ThemeButton"; // importing ThemeButton so we can change the theme to dark and light
import "../CSS/Pages.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`page ${theme}`}>
      <h1>About</h1>

      <p>This is my About page.</p>
      <ThemeButton />
    </div>
  );
};

export default About;
