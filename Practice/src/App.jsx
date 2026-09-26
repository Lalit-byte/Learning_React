import "./App.css";
// import UseStatePractice from './hooksPractice/useStatePractice'
// import UseStateArr from './hooksPractice/useStateArr'
// import Practice2 from './hooksPractice/Practice2'
// import Practice2CF from './ControlledForms/Practice2CF'
// import Counter from './hooksPractice/Counter_Hooks/Counter'
// import Theme from './hooksPractice/Counter_Hooks/Theme'
// import Timer from './hooksPractice/Use_Effect/Timer'
// import Online from './hooksPractice/Counter_Hooks/Online'
// import Themes from "./hooksPractice/Theme/Theme2"

import ThemeContext from "./ContextAPI/ThemeContext";
import {useState} from "react"

// import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";

import UserProvider from "./ContextAPI/UserProvider"



function App() {
  const [theme, setTheme] = useState("light")
  return (
    <BrowserRouter>

      <ThemeContext.Provider value={{theme,setTheme}}>         // this is a context api but not organized 
      <UserProvider>                                           // this is a context api but organized code is used 
      <NavBar />

        // Note : Routes has a special rule: Its direct children can only be Route or React.Fragment.
        <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />

        </Routes>

        </UserProvider>              // this is a context api
      </ThemeContext.Provider>       // this is a context api

    </BrowserRouter>
  );
}

export default App;
