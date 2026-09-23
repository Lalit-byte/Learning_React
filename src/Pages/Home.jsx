import { useContext } from "react";
import ThemeContext from "../ContextAPI/ThemeContext";
import ThemeButton from "../Components/ThemeButton";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme}>
        <h1>Home Page</h1>
        <ThemeButton />
      </div>
    </>
  );
};

export default Home;
