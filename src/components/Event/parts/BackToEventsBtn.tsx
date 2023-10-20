import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';

const ButtonBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('xs')]: {
    paddingTop: '24px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '44px',
  },
}));

interface BackToEventsBtnProps {
  title: string;
}

const BackToEventsBtn: FC<BackToEventsBtnProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.preventDefault();
    navigate('/events');
  };
  return (
    <ButtonBox>
      <Button
        variant="secondary"
        startIcon={<SvgSpriteIcon svgSpriteId="arrowLeft_icon" />}
        sx={{ minWidth: '288px', lineHeight: 1.6 }}
        onClick={handleClick}>
        {title}
      </Button>
    </ButtonBox>
  );
};

export default BackToEventsBtn;
