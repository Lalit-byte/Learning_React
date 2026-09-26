import {useContext} from "react"  // to use the created Context first we have to import useContext
import ThemeContext from "../ContextAPI/ThemeContext"
import ThemeButton from "../Components/ThemeButton"
import "../CSS/Pages.css";

const Profile = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`page ${theme}`}>
      <h1>Profile</h1>
      <ThemeButton/>
    </div>
  )
}

export default Profile
