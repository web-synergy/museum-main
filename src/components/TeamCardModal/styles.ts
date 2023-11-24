import { Box, styled } from '@mui/material';

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '734px',
  padding: '56px',
  outline: 'none',
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  boxShadow:
    '0px 2px 5px 0px rgba(0, 0, 0, 0.04), 0px 10px 10px 0px rgba(0, 0, 0, 0.03), 0px 22px 13px 0px rgba(0, 0, 0, 0.02), 0px 40px 16px 0px rgba(0, 0, 0, 0.01), 0px 62px 17px 0px rgba(0, 0, 0, 0.00)',
}));
