import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';

import MobileDialog from './MobileDialog';

const MobileMenu: FC = () => {
  const [menuEl, setMenuEl] = useState(false);

  const onOpenNavMenu = () => {
    setMenuEl(true);
  };

  const onCloseNavMenu = () => {
    setMenuEl(false);
  };

  return (
    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <IconButton
        aria-label="mobile menu icon"
        onClick={onOpenNavMenu}
        color="inherit"
        sx={{
          padding: 0,
        }}>
        <SvgSpriteIcon svgSpriteId="burgerSearch_icon" fontSize="medium" />
      </IconButton>
      <MobileDialog state={menuEl} onClose={onCloseNavMenu} />
    </Box>
  );
};

export default MobileMenu;
