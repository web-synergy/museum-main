import { Box, styled } from '@mui/material';

interface BannerWrapperProps {
  img: string;
}

export const BannerWrapper = styled(Box)<BannerWrapperProps>(({ theme, img }) => ({
  maxWidth: '1280px',

  margin: '0 auto',
  paddingTop: '236px',
  paddingBottom: '32px',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${img})`,
  [theme.breakpoints.up('md')]: {
    paddingTop: '216px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '312px',
    paddingBottom: '44px',
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  padding: '0 16px',
  textAlign: 'start',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    padding: '0 40px',
  },
  [theme.breakpoints.up('lg')]: { padding: '0 80px' },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '16px',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    width: '434px',
    gap: '24px',
  },

  [theme.breakpoints.up('lg')]: { width: '560px' },
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  marginTop: '24px',

  [theme.breakpoints.up('md')]: {
    margin: '0px',
  },
}));

export const WrapperImg = styled(Box)(() => ({
  width: '100%',
  height: '100%',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '60px 0',
  gap: '48px',
  [theme.breakpoints.up('md')]: {
    gap: '66px',
    padding: '80px 0',
  },
  [theme.breakpoints.up('lg')]: {
    gap: '68px',
    padding: '120px 0',
  },
}));
