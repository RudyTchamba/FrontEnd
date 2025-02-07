// src/components/theme/theme.js
import { defaultTheme } from 'react-admin';

const baseTheme = {
    ...defaultTheme,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.3
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.4
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.4
        },
        h6: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.4
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
                    }
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 24,
                    '&:last-child': {
                        paddingBottom: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                },
                head: {
                    fontWeight: 600,
                    backgroundColor: '#f5f5f5'
                }
            }
        }
    }
};

export const lightTheme = {
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ff4081',
            light: '#ff79b0',
            dark: '#c60055',
            contrastText: '#fff'
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff'
        }
    }
};

export const darkTheme = {
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
            contrastText: '#000'
        },
        secondary: {
            main: '#f48fb1',
            light: '#ffc1e3',
            dark: '#bf5f82',
            contrastText: '#000'
        },
        background: {
            default: '#303030',
            paper: '#424242'
        }
    }
};