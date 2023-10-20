import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { components } from './components';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
  interface ThemeOptions {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
}

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
  header: {
    mobile: { minHeight: 112 },
    desktop: {
      minHeight: 221,
    },
  },
});
