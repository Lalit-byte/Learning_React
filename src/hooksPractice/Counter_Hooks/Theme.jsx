import UserTheme from "./UserTheme"
import "./Theme.css"

const Theme = () => {
    const Themes = UserTheme();

  return (
    <div className={Themes.theme}>
      
      <h1>Themes</h1>
      <p>Current Theme: {Themes.theme}</p>
      <button onClick={Themes.toggleTheme}>
        { Themes.theme === "light" ? "Dark_Mode" : "Light_Mode"}
      </button>
    </div>
  )
}

export default Theme
