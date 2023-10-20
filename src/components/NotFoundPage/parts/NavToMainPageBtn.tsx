import { Box, Button, ButtonProps } from '@mui/material';
import { BoxProps, styled } from '@mui/system';
import { FC } from 'react';

const ButtonBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '288px',
  },
  [theme.breakpoints.up('md')]: {
    width: '278px',
  },
}));

const NavToMainPageBtn: FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonBox sx={{ textAlign: 'center' }}>
      <Button onClick={onClick} variant="primary" fullWidth>
        На головну сторінку
      </Button>
    </ButtonBox>
  );
};

export default NavToMainPageBtn;
