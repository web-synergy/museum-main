import { styled, Box } from '@mui/material';

export const EventsPreviewSection = styled('section')(({ theme }) => ({
  position: 'relative',
  paddingTop: '60px',
  paddingBottom: '60px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '80px',
    paddingBottom: '80px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '120px',
    paddingBottom: '120px',
  },
}));

export const EmptyEventsSection = styled('section')(({ theme }) => ({
  paddingTop: '60px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '80px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '120px',
  },
}));

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
