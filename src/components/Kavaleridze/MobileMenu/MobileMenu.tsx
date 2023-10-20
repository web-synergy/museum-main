import { FormControl, ListItemIcon, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import siteData, { routing } from '@/assets/siteData';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import CustomListItemText from './parts/CustomListItemText';
import CustomSelect from './parts/CustomSelect';

interface RoutingItem {
  title: string;
  href: string;
}
const getCurrentPageName = (pathname: string, routing: RoutingItem[]) => {
  return routing.find((el) => el.href === pathname)?.title;
};

const MobileMenu: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = getCurrentPageName(location.pathname, routing);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    navigate(event.target.value as string);
  };

  const { burgerSubMenu } = siteData.menuList;

  return (
    <FormControl fullWidth sx={{ paddingTop: '24px' }}>
      <CustomSelect value={title} onChange={handleChange} renderValue={() => title}>
        {burgerSubMenu.map((el) => (
          <MenuItem disableRipple key={el.title} value={el.href}>
            <CustomListItemText isSelected={el.href === location.pathname}>{getCurrentPageName(el.href, routing)}</CustomListItemText>
            {el.href === location.pathname && (
              <ListItemIcon
                sx={{
                  justifyContent: 'flex-end',
                }}>
                <SvgSpriteIcon svgSpriteId="check_icon" />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default MobileMenu;
