import {useState} from "react"


function useTheme(){

    const [theme , setTheme] = useState("light")

    const toggle = ()=> {
        setTheme(theme === "light" ? "dark" : "light" )
    }
     return {
        theme,
        toggle
     }
}

export default useTheme