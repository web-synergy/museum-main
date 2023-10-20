import { Container, useMediaQuery, useTheme } from '@mui/material';
import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Section from '../Common/Section';
import Menu from './Menu/Menu';
import MobileMenu from './MobileMenu/MobileMenu';

const Kavaleridze: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (location.pathname === '/about') {
      navigate('/about/artist');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Section variant="light">
      <Container>
        {isNotMobile ? <Menu /> : <MobileMenu />}
        <Outlet />
      </Container>
    </Section>
  );
};

export default Kavaleridze;
