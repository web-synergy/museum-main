import { List, ListItem, Container, styled } from '@mui/material';
const styles = {
  overflow: 'hidden',

  padding: 0,
  backgroundRepeat: 'no-repeat',
  borderRadius: '4px',
};
export const FamousList = styled(List)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '60px 0',
  gridTemplateRows: 'min-content repeat(5,minmax(100px , 168px))',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '80px 40px',
    gridTemplateRows: 'minmax(172px,260px) minmax(240px,400px) minmax(172px,260px)',
    gridTemplateColumns: 'repeat(6,1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 80px',

    gridTemplateColumns: 'repeat(6,1fr)',
  },

  gridGap: theme.spacing(3),
}));
export const BigGridItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 'span 3',
  },

  ...styles,
}));
export const SmallGridItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 'span 2',
  },
  ...styles,
}));
export const TopTextBlock = styled(BigGridItem)({
  d: 'flex',
  flexDirection: 'column',
  maxWidth: '452px',
  gap: '16px',
});

export const ContainerFamous = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    ':before': {
      content: '""',
      paddingTop: 'calc(94.4% + 160px)',
      display: 'block',
    },
  },
  [theme.breakpoints.up('lg')]: {
    ':before': {
      content: '""',
      paddingTop: 'calc(86% + 240px)',
      display: 'block',
    },
  },
}));
export const BottomTextBlock = styled(SmallGridItem)(({ theme }) => ({
  width: '75%',
  [theme.breakpoints.up('md')]: {
    alignSelf: 'end',
    width: '100%',
  },
}));

export const PictureArt = styled('picture')({
  width: '100%',
  height: '100%',
});

export const ImgArt = styled('img')({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
});
