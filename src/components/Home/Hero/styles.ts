import { styled, Box, Container } from '@mui/material';
import heroTablet from '@/assets/images/hero/hero-tablet.jpg';
import heroDesktop from '@/assets/images/hero/hero-desktop.jpg';

export const ContentBlock = styled(Container)({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  gap: '32px',
});

export const WrapperContent = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.header.mobile.minHeight}px - 10px)`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'lightgray',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.70) 28.24%, rgba(0, 0, 0, 0.50) 53.35%, rgba(0, 0, 0, 0.00) 70.25%), url(${heroTablet})`,

  [`${theme.breakpoints.up('md')}`]: {
    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.70) 28.24%, rgba(0, 0, 0, 0.50) 53.35%, rgba(0, 0, 0, 0.00) 70.25%), url(${heroDesktop})`,
  },

  [`${theme.breakpoints.up('lg')}`]: {
    height: `calc(100vh - ${theme.header.desktop.minHeight}px - 20px)`,
  },
}));
