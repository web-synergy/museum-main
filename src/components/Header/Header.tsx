import { forwardRef } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import MobileHeader from './mobile/MobileHeader';
import DesktopHeader from './desktop/DesktopHeader';

const Header = forwardRef<HTMLDivElement>(function (_, ref) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return <>{isDesktop ? <DesktopHeader ref={ref} /> : <MobileHeader ref={ref} />}</>;
});

export default Header;
