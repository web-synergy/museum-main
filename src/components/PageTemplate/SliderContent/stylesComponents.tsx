import { Box, styled } from '@mui/material';

export const SlideWrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  },
}));

export const SlideOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: `linear-gradient(180deg, rgba(21, 21, 20, 0.00) 6.08%, rgba(21, 21, 20, 0.60) 82.5%)`,
}));

export const SlideDescriptionBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '16px',
  bottom: '0px',
  left: '0px',
  color: 'white',
  textAlign: 'start',
  maxWidth: '100%',

  [theme.breakpoints.up('md')]: {
    padding: '38px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '60px',
  },
}));
