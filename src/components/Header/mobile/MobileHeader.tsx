import { forwardRef } from 'react';
import { Divider, AppBar, Toolbar, styled } from '@mui/material';
import HeaderLogo from '../parts/HeaderLogo';
import MobileMenu from './MobileMenu';
import HeaderWrapper from '../parts/HeaderWrapper';

export const Offset = styled('div')(({ theme }) => ({
  ...theme.header.mobile,
}));

const MobileHeader = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <>
      <AppBar component="header" position="fixed">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <HeaderWrapper alignItems="center" position="relative">
            <HeaderLogo />
            <MobileMenu />
            <Divider sx={{ position: 'absolute', bottom: '0', left: '0', right: '0' }} />
          </HeaderWrapper>
        </Toolbar>
      </AppBar>
      <Offset ref={ref} />
    </>
  );
});

export default MobileHeader;
