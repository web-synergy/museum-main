import { Box, BoxProps, Stack, StackProps, TextField, TextFieldProps, Typography, TypographyProps, styled } from '@mui/material';

export const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingBottom: '60px',
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: '80px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingBottom: '120px',
  },
}));

export const SearchInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '&.MuiTextField-root': {
    [theme.breakpoints.up('xs')]: {
      padding: '24px 0 16px 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: '32px 0 16px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '56px 0 16px 0',
    },
  },
  '& .MuiInput-input': {
    color: theme.palette.common.black,

    [theme.breakpoints.up('xs')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: 1.2,
      fontSize: '1.125rem',
    },
  },
  '& .MuiInput-root': {
    padding: '8px 0',

    '&:before': {
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
      marginLeft: '25px',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottom: `1px solid ${theme.palette.primary.dark}`,
    },
  },
}));

export const SearchResultsWrapper = styled(Stack)<StackProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '24px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    rowGap: '44px',
  },
}));

export const SearchTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  textTransform: 'none',
  [theme.breakpoints.up('xs')]: {
    padding: '24px 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '32px 0',
  },
  [theme.breakpoints.up('md')]: {
    lg: '44px 0 56px 0',
  },
}));

export const NoResultsStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    rowGap: '16px',
    padding: '24px 0 60px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '16px',
    padding: '32px 0 80px',
  },
  [theme.breakpoints.up('md')]: {
    rowGap: '24px',
    padding: '24px 0 60px',
  },
}));

export const NothingFoundTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  textTransform: 'none',
  lineHeight: 1.1,
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

export const NothingFoundSubTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  lineHeight: 1.5,

  [theme.breakpoints.up('xs')]: {
    fontSize: '0.875rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
  },
}));

export const ButtonBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.up('xs')]: {
    width: '288px',
    paddingTop: '24px',
  },
  [theme.breakpoints.up('md')]: {
    width: '248px',
    paddingTop: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '44px',
  },
}));
