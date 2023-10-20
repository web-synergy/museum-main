import { Box, Dialog, IconButton, Typography } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import Section from '../Common/Section';
interface IModalDialog {
  handleClose: () => void;
  open: boolean;
}

export default function ModalDialog({ handleClose, open }: IModalDialog) {
  return (
    <Dialog
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: { xs: '280px', md: '480px', lg: '560px' },
          },
        },
      }}
      PaperProps={{ style: { padding: '0px', margin: '0px' } }}
      onClose={handleClose}
      open={open}>
      <Section variant="light">
        <IconButton
          onClick={() => {
            handleClose();
          }}
          aria-label="close form"
          color="inherit"
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
          }}>
          <SvgSpriteIcon fontSize="medium" svgSpriteId="burgerOpen_icon" />
        </IconButton>
        <Box
          sx={{
            width: { xs: '280px', md: '480px', lg: '560px' },
            height: '217px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography sx={{ fontSize: '44px' }} variant="body2Kyiv">
            Дякуємо!
          </Typography>
          <Typography variant="navigationRale">Ваш запит відправлено.</Typography>
        </Box>
      </Section>
    </Dialog>
  );
}
