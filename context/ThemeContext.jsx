/**
 * Dark/Light Mode
 */

import React, {useState, createContext, useContext} from 'react';

// Import preconfigured themes from theme file
import {themes} from '../helpers/theme';

// Context
const ThemeContext = createContext({});

// Provider to be used in index/App/or top of any parent
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook for easy access to theme and setTheme
export const useTheme = () => {
  const state = React.useContext(ThemeContext);

  const {theme, setTheme} = state;

  const toggleTheme = value => {
    setTheme(value === 'dark' ? themes.dark : themes.light);
  };

  return {theme, toggleTheme};
};
