import React, { useState, useContext, createContext } from "react";

// Create context
const ThemeContext = createContext();

const UseContextHook = () => {
  const [theme, setTheme] = useState("light");

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Content />
    </ThemeContext.Provider>
  );
};

// Component inside same file consuming context
const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default UseContextHook;
