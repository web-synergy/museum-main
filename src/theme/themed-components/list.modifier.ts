import { Components, Theme } from '@mui/material/styles';

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&: hover': {
        color: theme.palette.primary.dark,
        backgroundColor: 'transparent',
      },
    }),
  },
};
