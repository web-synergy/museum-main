import { FC } from 'react';
import { MenuList } from '@mui/material';
import Item from './Item';
import data from '@/assets/siteData';

const {
  menuList: { burgerSubMenu },
} = data;
const Menu: FC = () => {
  return (
    <MenuList
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
        display: 'flex',
        justifyContent: { md: 'space-between', lg: 'center' },
        gap: { md: 'auto', lg: 13 },
      }}>
      {burgerSubMenu.map(({ href, title }) => (
        <Item key={title} href={href} title={title} />
      ))}
    </MenuList>
  );
};

export default Menu;
