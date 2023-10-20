import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { ButtonBox } from '../styles';

const ShowMoreBtn: FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonBox>
      <Button onClick={onClick} variant="secondary" fullWidth sx={{ lineHeight: 1.61 }}>
        Показати більше
      </Button>
    </ButtonBox>
  );
};

export default ShowMoreBtn;
