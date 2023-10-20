import { Components, Theme } from '@mui/material/styles';

export const MuiLink: Components<Theme>['MuiLink'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: theme.transitions.create('color'),

      '&:hover': {
        color: theme.palette.primary.dark,
      },
    }),
  },
};
