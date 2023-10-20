import { Components, Theme } from '@mui/material/styles';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      transition: theme.transitions.create('color'),
      ...(ownerState.color === 'primary' && { color: theme.palette.text.primary }),
      ...(ownerState.color === 'secondary' && { color: theme.palette.primary.dark }),
      '&:hover': {
        color: theme.palette.primary.main,
      },
    }),
  },
};
