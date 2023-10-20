import { FC } from 'react';
import { Dialog, Stack, IconButton } from '@mui/material';
import DialogTransition from '../parts/DialogTransition';
import LangPanel from '../parts/LangPanel';
import SearchInput from '../parts/SearchInput';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import NavMenu from '../parts/NavMenu';
import Info from '../parts/Info';
import TicketBtn from '../parts/TicketBtn';

interface MobileDialogProps {
  state: boolean;
  onClose: () => void;
}

const MobileDialog: FC<MobileDialogProps> = ({ state, onClose }) => {
  return (
    <Dialog
      fullScreen
      open={state}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      PaperProps={{ sx: { pt: { xs: 5, md: '44px' }, pb: 6, px: { xs: 2, md: 5 } } }}>
      <Stack gap={6}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <LangPanel additionalClickFn={onClose} />
          <IconButton onClick={onClose} color="inherit" aria-label="close" sx={{ padding: 0 }}>
            <SvgSpriteIcon svgSpriteId="burgerOpen_icon" fontSize="medium" />
          </IconButton>
        </Stack>
        <SearchInput onCloseMenu={onClose} />
        <NavMenu onCloseMobileMenu={onClose} />
        <Stack alignItems="center">
          <TicketBtn additionalClickFn={onClose} />
        </Stack>
        <Info />
      </Stack>
    </Dialog>
  );
};

export default MobileDialog;
