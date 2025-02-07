import React from 'react';
import { useStore } from 'react-admin';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useStore('theme.mode', 'light');

    const toggleTheme = () => {
        const newMode = isDarkMode === 'light' ? 'dark' : 'light';
        setIsDarkMode(newMode);
        localStorage.setItem('theme', newMode);
    };

    return (
        <Tooltip title={`Switch to ${isDarkMode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={toggleTheme} color="inherit">
                {isDarkMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
        </Tooltip>
    );
};