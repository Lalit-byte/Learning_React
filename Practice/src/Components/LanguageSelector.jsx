import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext"

const LanguageSelector = () => {

    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
        </select>
    );
};

export default LanguageSelector;