import { Components, Theme } from '@mui/material/styles';

export const MuiTooltip: Components<Theme>['MuiTooltip'] = {
  defaultProps: {
    placement: 'bottom',
  },
  styleOverrides: {
    tooltip: ({ theme }) => ({
      color: theme.palette.common.black,
      backgroundColor: theme.palette.gray.light,
      padding: 16,
      borderRadius: '4px',
      fontSize: '14px',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
    }),
  },
};
