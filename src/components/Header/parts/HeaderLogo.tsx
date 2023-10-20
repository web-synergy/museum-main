import { FC } from 'react';
import { Box, Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';

const HeaderLogo: FC = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  if (isMainPage) {
    return (
      <Link href="/" style={{ lineHeight: 0 }}>
        <Box component="img" src={logo} alt="Logo" />
      </Link>
    );
  }
  return (
    <RouterLink to="/" style={{ lineHeight: 0 }}>
      <Box component="img" src={logo} alt="Logo" />
    </RouterLink>
  );
};

export default HeaderLogo;
