import LanguageContext from "./LanguageContext"
import { useState } from "react"

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en")

  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
