import {useState} from "react"

function UserTheme () {

    const [theme , setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return {
        theme,
        toggleTheme
    }

}

export default UserTheme
