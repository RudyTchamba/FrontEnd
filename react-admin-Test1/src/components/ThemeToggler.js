import React from 'react';
import { IconButton, useTheme as useMuiTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../providers/themeProvider';

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isDark = muiTheme.palette.mode === 'dark';

  return (
    <IconButton
      onClick={toggleTheme}
      color="inherit"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};