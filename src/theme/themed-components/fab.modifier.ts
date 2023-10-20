import { Components, Theme } from '@mui/material/styles';

export const MuiFab: Components<Theme>['MuiFab'] = {
  defaultProps: {
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'transparent',
      width: 52,
      height: 52,
      boxShadow: 'none',

      '&:hover': {
        color: theme.palette.primary.dark,
        backgroundColor: 'transparent',
      },

      '&:active': {
        boxShadow: 'none',
      },
    }),
  },
};
