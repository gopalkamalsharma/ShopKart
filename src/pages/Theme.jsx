import {useContext, useState} from "react"
import {ThemeContext} from "./Practice"

function Theme() {
  
  const [theme, setTheme] = useState("Light");
  return (
    <>
    <div>Theme: {theme}</div>
    <button onClick={function () { setTheme(theme === "Light" ? "Dark" : "Light"); }}>Change Theme</button>
    </>
    
  )
}

export default Theme