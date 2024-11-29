'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-hubot-sans)',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 600,
    },
  },  
  colorSchemes: {
    light: {
      palette: {
        primary: {          
          main: 'rgb(144,193 , 200)',         

        },
        secondary: {
          main: 'rgb(2, 85, 121)',
        },
      },
    },   
  },
});    

export default theme;
