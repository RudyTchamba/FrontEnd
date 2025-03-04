import React, { createContext, useContext, useCallback } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { defaultTheme, darkTheme } from '../utils/theme';

const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, theme: initialTheme = defaultTheme }) => {
  const [theme, setTheme] = React.useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      return darkTheme;
    }
    return initialTheme;
  });

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme.palette.mode === 'light' ? darkTheme : defaultTheme;
      localStorage.setItem('theme', newTheme.palette.mode);
      return newTheme;
    });
  }, []);

  // Create MUI theme
  const muiTheme = createTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};