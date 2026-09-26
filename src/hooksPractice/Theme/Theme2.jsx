import UseTheme from "./useTheme"
import "./Theme.css"

const Theme2 = () => {
  const theme = UseTheme()   //here i have not used de-structuring

  return (
    <div className={theme.theme}>
      <div className="theme-card">
        <h1>Theme</h1>

        <button onClick={() => theme.toggle()}>
          {theme.theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </div>
  )
}

export default Theme2


