import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { LanguageContext } from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {theme,setTheme} = useContext(ThemeContext);
  const {language, setLanguage} = useContext(LanguageContext);

  function toggleTheme(){
    if(theme === 'light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }
  
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={toggleTheme}>{theme==='light'?'Dark':'Light'} Theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
