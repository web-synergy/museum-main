import { styled, Box } from '@mui/material';

export const WrapperImg = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '270px',

  [theme.breakpoints.up('md')]: {
    height: '319px',
  },

  [theme.breakpoints.up('lg')]: {
    width: '642px',
    height: '400px',
  },

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
}));
