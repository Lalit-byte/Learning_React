import { useContext } from "react"
import UserContext from "../ContextAPI/UserContext"
import ThemeContext from "../ContextAPI/ThemeContext"
import ThemeButton from "../Components/ThemeButton"

import "../index.css"


const Profile = () => {

    const username = useContext(UserContext)
    const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={theme}>
      <h1>Hello {username}</h1>
      <p>current theme:{theme}</p>
      <ThemeButton/>
    </div>
    </>

  )
}

export default Profile
