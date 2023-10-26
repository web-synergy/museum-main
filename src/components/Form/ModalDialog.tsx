import { Box, Dialog, IconButton, Typography } from '@mui/material';
import Section from '../Common/Section';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
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
          <Typography sx={{ fontSize: { xs: '32px', md: '40px' } }} variant="body2Kyiv">
            Дякуємо!
          </Typography>
          <Typography sx={{ fontSize: { xs: '14px', md: '18px' } }} variant="navigationRale">
            Ваш запит відправлено.
          </Typography>
        </Box>
      </Section>
    </Dialog>
  );
}
