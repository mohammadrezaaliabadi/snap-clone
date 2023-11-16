import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#3f7961',
        main: '#444336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
