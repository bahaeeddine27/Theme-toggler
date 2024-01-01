import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Toggler from "./Toggler";
import ThemeContext from "./ThemeContext";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.darkMode ? "#334" : "#eef")};
    color: ${(props) => (props.darkMode ? "#eee" : "#222")};
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <GlobalStyles darkMode={darkMode} />
        <h3>Dark Mode:</h3>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

