import { Box, BoxProps, styled } from '@mui/material';

const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
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

export { ContentBox };
