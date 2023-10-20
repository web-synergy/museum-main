import { Box, styled } from '@mui/material';
import bannerMob from './ImgBanner/banner-mob.png';
import bannerTablet from './ImgBanner/banner-tablet.png';
import bannerDesc from './ImgBanner/banner-desctop.png';

export const BannerWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',

  margin: '0 auto',
  paddingTop: '236px',
  paddingBottom: '32px',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('xs')]: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerMob})`,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '216px',
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerTablet})`,
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '312px',
    paddingBottom: '44px',
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${bannerDesc})`,
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  width: '320px',
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

    // [theme.breakpoints.up('lg')]: { maxWidth: '100%', height: '100%' },
  },
}));
