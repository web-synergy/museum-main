import { Box, BoxProps, Stack, StackProps, Typography, TypographyProps, styled } from '@mui/material';

export const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0px auto',
  width: '280px',
  height: '260px',

  [theme.breakpoints.down('lg')]: {
    width: '224px',
    height: '210px',
  },
  [theme.breakpoints.down('md')]: {
    width: '160px',
    height: '140px',
  },
}));

export const Text404 = styled(Typography)<TypographyProps>(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '7.5rem',
  fontWeight: 800,
  lineHeight: 'normal',
  width: '100%',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    fontSize: '6.25rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
}));

export const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '120px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
  },
}));

export const Error404Box = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: '24px',
  [theme.breakpoints.only('md')]: {
    paddingBottom: '24px',
  },
  [theme.breakpoints.only('sm')]: {
    paddingBottom: '16px',
  },
}));

export const SupportTextBox = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  rowGap: '24px',
  [theme.breakpoints.only('sm')]: {
    rowGap: '16px',
  },
}));
