import { Components, Theme } from '@mui/material/styles';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      lineHeight: 1,

      // '&::-webkit-scrollbar': {
      //   width: '8px',
      //   backgroundColor: theme.palette.gray.light,
      // },
      // '&::-webkit-scrollbar-track': {
      //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      // },
      // '&::-webkit-scrollbar-thumb': {
      //   backgroundColor: theme.palette.gray.dark,
      //   borderRadius: '10px',
      // },
    },
  }),
};
