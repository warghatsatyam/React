import "./App.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }} >
        <Navbar />
        <Home />
      </LanguageContext.Provider>
      </ThemeContext.Provider>
      
    </div>
  );
}
