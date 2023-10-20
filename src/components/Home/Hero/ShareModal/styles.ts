import { Box, styled } from '@mui/material';
import ButtonWithIcon from '../../../Common/ButtonWithIcon';
import { buttonClasses } from '@mui/material/Button';

export const StyledBox = styled(Box)(({ theme }) => ({
  width: 280,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '4px',

  [theme.breakpoints.up('md')]: {
    width: 480,
  },

  [theme.breakpoints.up('lg')]: {
    width: 556,
  },
}));

export const StyledTextButton = styled(ButtonWithIcon)(({ theme }) => ({
  padding: 0,
  paddingBottom: '4px',
  fontFamily: 'Raleway',
  color: theme.palette.common.black,
  borderRadius: 0,
  borderBottom: '1px solid',
  borderColor: 'inherit',
  fontSize: '14px',
  lineHeight: 1.429,
  fontWeight: 600,

  [`& .${buttonClasses.endIcon}`]: {
    marginLeft: '4px',
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
    lineHeight: 1.556,
  },
}));
