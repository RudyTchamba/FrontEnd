import { defaultTheme as raDefaultTheme } from 'react-admin';

export const defaultTheme = {
    ...raDefaultTheme,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 0.3s, color 0.3s',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: 'background-color 0.3s, box-shadow 0.3s',
          },
        },
      },
    },
    palette: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
      secondary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
        contrastText: '#fff',
      },
      mode: 'light',
      background: {
        default: '#f5f5f5',
        paper: '#fff',
      },
    },
    typography: {
      h1: {
        fontWeight: 700,
        fontSize: '2rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '1.8rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
    },
  };
  
  export const darkTheme = {
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      mode: 'dark',
      primary: {
        ...defaultTheme.palette.primary,
        main: '#90caf9',
      },
      secondary: {
        ...defaultTheme.palette.secondary,
        main: '#82b1ff',
      },
      background: {
        default: '#303030',
        paper: '#424242',
      },
    },
};