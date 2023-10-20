import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    adminPrimaryBtn: true;
    adminSecondaryBtn: true;
  }
}
export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      color: theme.palette.common.black,
    }),
    startIcon: {
      '& > *:first-of-type': {
        fontSize: '1.5rem',
      },
    },
    endIcon: {
      marginRight: 0,
      marginLeft: 8,
      '& > *:first-of-type': {
        fontSize: '1.5rem',
      },
    },
  },
  variants: [
    {
      props: { variant: 'primary' },
      style: ({ theme }) => ({
        borderRadius: 24,
        padding: '8px 16px',
        minWidth: 204,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },

        '&:focus': {
          backgroundColor: theme.palette.primary.dark,
        },

        '&:active': {
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',
          backgroundColor: theme.palette.primary.dark,
        },

        '&:disabled': {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.action.disabledBackground,
        },
      }),
    },
    {
      props: { variant: 'tertiary' },
      style: ({ theme }) => ({
        padding: 0,
        borderBottom: '1px solid',
        borderColor: 'transparent',
        fontFamily: 'Raleway',
        lineHeight: 'normal',
        fontWeight: 600,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,

        '& .MuiButton-endIcon': {
          marginLeft: 4,
        },

        borderRadius: 0,
        '&:hover': {
          color: theme.palette.primary.dark,
        },

        '&:focus': {
          borderBottom: '1px solid',
          color: theme.palette.primary.dark,
          borderColor: 'theme.palette.primary.dark',
        },

        '&:active': {},

        '&:disabled': {
          color: theme.palette.text.disabled,
        },
      }),
    },
    {
      props: { variant: 'secondary' },
      style: ({ theme }) => ({
        borderRadius: 24,
        padding: '8px 16px',
        minWidth: 204,
        backgroundColor: 'transparent',
        border: '1.5px solid',
        borderColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.contrastText,

        '&:hover': {
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        },
        // focus-visible - для того, щоб фокус був тільки при навігації клавішами
        '&:focus-visible': {
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
          backgroundColor: theme.palette.secondary.dark,
        },

        '&:active': {
          boxShadow: '0px 4px 8px 0px rgba(21, 21, 20, 0.15) inset',

          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        },

        '&:disabled': {
          color: theme.palette.text.disabled,
          borderColor: theme.palette.text.disabled,
        },
      }),
    },
    {
      props: { variant: 'text' },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.dark,
          backgroundColor: 'transparent',
        },
      }),
    },
  ],
};
