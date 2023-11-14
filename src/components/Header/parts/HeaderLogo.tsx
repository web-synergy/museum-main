import { FC } from 'react';
import { Box, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';

const HeaderLogo: FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  if (isMainPage) {
    return (
      <Link href="/" style={{ lineHeight: 0 }} aria-label="Повернутись на головну сторінку">
        <Box component="img" src={logo} alt="Логотип Музею-Мастерні ім. Івана Кавалерідзе" />
      </Link>
    );
  }
  return (
    <RouterLink to="/" style={{ lineHeight: 0 }} aria-label="Повернутись на головну сторінку">
      <Box component="img" src={logo} alt="Логотип Музею-Мастерні ім. Івана Кавалерідзе" />
    </RouterLink>
  );
};

export default HeaderLogo;
