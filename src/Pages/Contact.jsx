import { useContext } from "react"
import ThemeContext from "../ContextAPI/ThemeContext"
import ThemeButton from "../Components/ThemeButton"

const Contact = () => {
  const {theme} =  useContext(ThemeContext)
  return (
    <div className={theme}>
      <h1>Contact Page</h1>
      <ThemeButton/>
    </div>
  )
}

export default Contact
