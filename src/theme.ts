'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 14,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: 'rgb(76, 193, 255);',

        },
        secondary: {
          main: 'rgb(7,12 , 255);',
        },
      },
    },   
  },
});    

export default theme;
