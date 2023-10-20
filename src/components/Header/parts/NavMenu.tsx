import { FC } from 'react';
import { List, useTheme, useMediaQuery } from '@mui/material';
import NavMenuItem from './NavMenuItem';
import data from '@/assets/siteData';

const {
  menuList: { main },
} = data;

interface NavMenuProps {
  onCloseMobileMenu?: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ onCloseMobileMenu }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const navMenu = isDesktop ? main.filter((item) => item.title !== 'Головна') : main;

  return (
    <List
      disablePadding
      sx={{
        display: 'grid',
        gap: { xs: 2, md: 3, lg: '60px' },
        gridTemplate: { xs: 'repeat(5, auto)/1fr', lg: '1fr/repeat(4, auto)' },
      }}>
      {navMenu.map(({ href, title }) => (
        <NavMenuItem href={href} title={title} key={title} onCloseMobileMenu={onCloseMobileMenu} />
      ))}
    </List>
  );
};

export default NavMenu;
