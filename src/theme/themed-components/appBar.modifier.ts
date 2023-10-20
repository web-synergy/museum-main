import { Components, Theme } from '@mui/material/styles';

export const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      boxShadow: 'none',
    }),
  },
};
