import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, useTheme } from '@mui/material';
import Section from '../Common/Section';
import { Wrapper } from './styles';

const Stub: FC = () => {
  const theme = useTheme();

  const buttonStyle = {
    marginTop: '20px',
    width: '288px',
    [theme.breakpoints.up('md')]: {
      width: '279px',
    },
  };
  return (
    <Section variant="light">
      <Wrapper>
        <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant="h2">
          Вибачте, на даний момент ця сторінка знаходиться в розробці
        </Typography>

        <Button variant="primary" component={Link} to="/" sx={buttonStyle}>
          На головну сторінку
        </Button>
      </Wrapper>
    </Section>
  );
};

export default Stub;
