import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(37,99,235,1)',
    },
    secondary: {
      main: '#808080',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      fontFamily: roboto.style.fontFamily,
    },
  },
});

export default theme;
