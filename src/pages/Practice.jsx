import {createContext} from "react"; //import
import Theme from "./Theme";

const ThemeContext = createContext(); //initialization

export default function Practice({children}) {
    
    const theme = "Light";
    return (
        <>
        
            <ThemeContext.Provider value={theme}>
                <Theme />
                {children}
            </ThemeContext.Provider>
        </>

    );
}
export {ThemeContext};