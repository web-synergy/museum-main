import { Stack, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import { FC, Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useData from '@/hooks/useData';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Loader from '../Loader/Loader';

const SharedLayout: FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname;
  const is404Page = location.pathname === '/404';
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { isLoading } = useData();

  const onClickScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <Stack sx={{ height: '100vh', width: '100vw', backgroundColor: (theme) => theme.palette.common.black }} justifyContent="center">
        <Loader visible={isLoading} />
      </Stack>
    );
  }

  return (
    <Stack minHeight={'100vh'}>
      <Header ref={scrollRef} />
      {isHomePage !== '/' && !is404Page && <Breadcrumbs />}
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}>
        <Suspense fallback={<Loader visible={true} />}>
          <Outlet />
        </Suspense>
        {isDesktop && <ScrollToTop scrollTrigger={scrollTrigger} onClickScrollTop={onClickScrollTop} />}
      </Stack>
      <Footer />
      {!isDesktop && <ScrollToTop scrollTrigger={scrollTrigger} onClickScrollTop={onClickScrollTop} />}
    </Stack>
  );
};

export default SharedLayout;
