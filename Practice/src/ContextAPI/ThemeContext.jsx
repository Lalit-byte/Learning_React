import { createContext } from "react"

const ThemeContext = createContext()

export default ThemeContext


// here we initialized the context api to create a ThemeContext






// This will use when we want organized code by this we dont have to create the extra jsx file like the --->
// --> ThemeButton.jsx because we are writing the code directly to the ThemeContext.jsx 


// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {

//   const [theme, setTheme] = useState("light");

//   const toggle = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggle }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };