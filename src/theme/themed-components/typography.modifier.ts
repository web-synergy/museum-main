import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    h1: true;
    h2: true;
    h3Kyiv: true;
    h3: true;
    subhead: true;
    body2Kyiv: true;
    breadcrumbs: true;
    navigationRale: true;
    navigationRaleFooter: true;
    navigationKyiv: true;
    caption: true;
    imageLabel: true;
  }
}
export const MuiTypography: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variant: 'body1',
  },

  variants: [
    {
      props: { variant: 'title' },
      style: ({ theme }) => ({
        fontFamily: 'Kyiv Type',
        fontSize: 32,
        lineHeight: 1.125, //36px,
        [theme.breakpoints.up('md')]: {
          fontSize: 40,
          lineHeight: 1.1, //44px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 48,
          lineHeight: 1.083, //52px,
        },
      }),
    },
    {
      props: { variant: 'h1' },
      style: ({ theme }) => ({
        fontFamily: 'Kyiv Type',
        fontSize: 24,
        lineHeight: 1.167, //28px,
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
          fontSize: 32,
          lineHeight: 1.125, //36px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 40,
          lineHeight: 1.1, //44px,
        },
      }),
    },
    {
      props: { variant: 'h2' },
      style: ({ theme }) => ({
        fontFamily: 'Kyiv Type',
        fontSize: 20,
        lineHeight: 1.2, // '24px',
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
          fontSize: 24,
          lineHeight: 1.167, // '28px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 32,
          lineHeight: 1.125, //'36px',
        },
      }),
    },
    {
      props: { variant: 'h3Kyiv' },
      style: ({ theme }) => ({
        fontFamily: 'Kyiv Type',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 18,
        lineHeight: 1.222, // '22px',
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
          fontSize: 20,
          lineHeight: 1.2, //'24px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 24,
          lineHeight: 1.167, // 28px,
        },
      }),
    },
    {
      props: { variant: 'h3' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 1.222, //22px,
        [theme.breakpoints.up('md')]: {
          fontSize: 20,
          lineHeight: 1.2, //24px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 24,
          lineHeight: 1.167, //28px,
        },
      }),
    },
    {
      props: { variant: 'subhead' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 1.222, //22px,
        [theme.breakpoints.up('md')]: {
          fontSize: 20,
          lineHeight: 1.2, //24px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 24,
          lineHeight: 1.167, //28px,
        },
      }),
    },
    {
      props: { variant: 'body1' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 14,
        lineHeight: 1.429, //20px,
        [theme.breakpoints.up('md')]: {
          fontSize: 18,
          lineHeight: 1.555, //28px,
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
      }),
    },
    {
      props: { variant: 'body2' },
      style: {
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 1.5, //24px,
      },
    },
    {
      props: { variant: 'body2Kyiv' },
      style: {
        fontFamily: 'Kyiv Type',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 1.5, //'24px',
      },
    },
    {
      props: { variant: 'breadcrumbs' },
      style: {
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 14,
        lineHeight: 1.143, //'16px',
      },
    },
    {
      props: { variant: 'navigationRale' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 'normal',
        fontWeight: 500,

        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
      }),
    },
    {
      props: { variant: 'navigationRaleFooter' },
      style: () => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 'normal',
        fontWeight: 500,
      }),
    },
    {
      props: { variant: 'navigationKyiv' },
      style: ({ theme }) => ({
        fontFamily: 'Kyiv Type',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 16,
        lineHeight: 'normal',
        fontWeight: 500,

        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
      }),
    },
    {
      props: { variant: 'caption' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 14,
        lineHeight: 1.429, //'20px',
        fontWeight: 400,

        [theme.breakpoints.up('md')]: {
          fontSize: 16,
          lineHeight: 1.5, //'24px',
        },

        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
          lineHeight: 1.555, //28px,
        },
      }),
    },
    {
      props: { variant: 'imageLabel' },
      style: ({ theme }) => ({
        fontFamily: 'Raleway',
        fontVariantNumeric: 'lining-nums proportional-nums',
        fontSize: 12,
        lineHeight: 1.333, //'16px',
        fontWeight: 400,
        color: theme.palette.text.secondary,
      }),
    },
  ],
};
