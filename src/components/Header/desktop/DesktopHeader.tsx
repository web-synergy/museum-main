import { forwardRef } from 'react';
import { Divider, AppBar, Toolbar } from '@mui/material';
import Info from '../parts/Info';
import HeaderLogo from '../parts/HeaderLogo';
import Search from '../parts/SearchInput';
import NavMenu from '../parts/NavMenu';
import LangPanel from '../parts/LangPanel';
import HeaderWrapper from '../parts/HeaderWrapper';
import TicketBtn from '../parts/TicketBtn';

const DesktopHeader = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <>
      <AppBar position="static" component="header" ref={ref}>
        <Toolbar disableGutters sx={{ display: 'flex', flexDirection: 'column' }}>
          <HeaderWrapper alignItems="flex-start">
            <Info />
            <HeaderLogo />
            <TicketBtn />
          </HeaderWrapper>
          <Divider flexItem />
        </Toolbar>
      </AppBar>

      <AppBar position="sticky" component="div">
        <Toolbar disableGutters>
          <HeaderWrapper alignItems="center" position="relative" justifyContent="flex-end">
            <Search />
            <NavMenu />
            <LangPanel />
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default DesktopHeader;
