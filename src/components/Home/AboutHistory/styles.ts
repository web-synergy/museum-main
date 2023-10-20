import { Box, styled } from '@mui/material';
// import GeneralButton from '../../GeneralButton/GeneralButton';

export const InfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  rowGap: '24px',
  padding: '60px 0',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2 , 1fr)',
    rowGap: '32px',
    columnGap: '24px',
    padding: '80px 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
  },
}));

export const Picture = styled('picture')({
  width: '100%',
  gridColumn: '1 / 3',
});

export const Img = styled('img')({
  width: '100%',
});

// export const Button = styled(GeneralButton)(({ theme }) => ({
//   justifySelf: 'end',

//   alignSelf: 'start',
//   order: 1,
//   fontFamily: 'Raleway',
//   fontVariantNumeric: 'lining-nums proportional-nums',
//   fontWeight: 600,
//   fontSize: 14,
//   lineHeight: 1.429, //20px,
//   [theme.breakpoints.up('md')]: {
//     fontSize: 18,
//     order: 'initial',
//     lineHeight: 1.555, //28px,
//     alignSelf: 'end',
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: 18,
//   },
// }));
