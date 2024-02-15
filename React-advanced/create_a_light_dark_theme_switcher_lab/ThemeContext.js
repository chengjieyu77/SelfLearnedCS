import { createContext, useContext, useState } from "react";

//the default value is not relevant and can be any value. It’s only useful for testing components in isolation or as a default value when a context consumer does not have a Provider further up in the tree.
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState("light");
    return <ThemeContext.Provider 
            value={{ theme,
            toggleTheme:() => setTheme(theme === "light" ? "dark" : "light"), }}>
        {children}
    </ThemeContext.Provider>
};

export const useTheme = () =>useContext(ThemeContext);
