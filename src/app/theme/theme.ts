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
          main: 'rgb(60, 141, 141)',
        },
        secondary: {
          main: '#f2f2f2',
        },
      },
    },
  },
});    

export default theme;
