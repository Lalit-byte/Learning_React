import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./ContextAPI/UserProvider";
import LanguageProvider from "./Context/LanguageProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <LanguageProvider>

      <UserProvider>     {/* // this is a context api but organized code is used  */}
      <App />
     </UserProvider>     {/*// this is a context api */}
    
    </LanguageProvider>
    
  </StrictMode>,
);
