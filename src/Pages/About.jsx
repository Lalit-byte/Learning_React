import {useContext} from "react"                       // used to use created context api
import ThemeContext from "../ContextAPI/ThemeContext"  // importing ThemeContext that we created at the initialization
import ThemeButton from "../Components/ThemeButton"    // importing ThemeButton so we can change the theme to dark and light

const About = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <h1>About</h1>
      <ThemeButton/>
    </div>
  )
}

export default About
