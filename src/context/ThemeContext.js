import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
