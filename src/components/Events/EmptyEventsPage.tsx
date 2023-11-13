import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, useTheme, Container, Box } from '@mui/material';
import Section from '../Common/Section';
import { Wrapper } from './styles';

const EmptyEventsPage: FC = () => {
  const theme = useTheme();

  const buttonStyle = {
    width: '288px',
    [theme.breakpoints.up('md')]: {
      width: '280px',
    },
  };

  return (
    <Section variant="light">
      <Container>
        <Wrapper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '12px', md: '14px', lg: '16px' },
            }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant="h2">
              Слідкуйте за подіями!
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant="h2">
              В найближчий час тут буде багато цікавого
            </Typography>
          </Box>

          <Button variant="primary" component={Link} to="/" sx={buttonStyle}>
            На головну сторінку
          </Button>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default EmptyEventsPage;
