import { IconButton, Typography, Modal } from '@mui/material';

import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { ModalContainer } from './styles';

interface IModalTeamCard {
  handleClose: () => void;
  open: boolean;
}

const TeamCardModal = ({ handleClose, open }: IModalTeamCard) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContainer>
        <IconButton
          onClick={() => {
            handleClose();
          }}
          aria-label="close form"
          color="inherit"
          sx={{
            p: 0,
            position: 'absolute',
            top: '16px',
            right: '16px',
          }}>
          <SvgSpriteIcon svgSpriteId="burgerOpen_icon" />
        </IconButton>

        <Typography sx={{ fontSize: { xs: '32px', md: '40px' } }}>Дякуємо!</Typography>
      </ModalContainer>
    </Modal>
  );
};

export default TeamCardModal;
