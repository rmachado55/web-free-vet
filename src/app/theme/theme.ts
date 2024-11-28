'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },  
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: 'rgb(76, 193, 255);',

        },
        secondary: {
          main: 'rgb(7, , 255);',
        },
      },
    },   
  },
});    

export default theme;
