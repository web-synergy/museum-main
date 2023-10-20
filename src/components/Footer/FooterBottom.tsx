import { Box, IconButton, Link, Stack, Typography, styled } from '@mui/material';

import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const TextLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: 'solid 1px',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.primary.main,
  },
}));

const FooterBottom = () => {
  return (
    <Box
      sx={{
        color: (theme) => theme.palette.text.secondary,
        display: 'flex',
        justifyContent: { xs: 'center', lg: 'space-between' },
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        wight: '100%',
        textAlign: 'center',
        p: '24px 0px',
        gap: { xs: '32px', lg: '0' },
      }}>
      <Typography variant="navigationRaleFooter">Розробка Baza Trainee Ukraine 2023 &copy; Всі права захищені</Typography>
      <TextLink target="_blank" href="https://drive.google.com/file/d/1rQx-JY7Wl21UaxMojnHDzwfHUn7Je2Ip/view?usp=drive_link">
        <Typography variant="navigationRaleFooter">Політика конфіденційності</Typography>
      </TextLink>
      <TextLink target="_blank" href="https://drive.google.com/file/d/1LwTnn-6qpGVNR2h0DJ_e3VZTFD_CRqDd/view?usp=drive_link">
        <Typography variant="navigationRaleFooter">Правила користування сайтом</Typography>
      </TextLink>
      <Stack gap="13px" direction="row">
        <IconButton
          sx={{ p: 0, color: (theme) => theme.palette.common.white }}
          target="_blank"
          href="https://www.instagram.com/kavaleridzemuseum/?hl=en"
          aria-label="instagram_icon">
          <SvgSpriteIcon fontSize="medium" svgSpriteId={'instagram_icon'} />
        </IconButton>
        <IconButton
          sx={{ p: 0, color: (theme) => theme.palette.common.white }}
          target="_blank"
          href="https://www.facebook.com/ikavaleridzemuseum/"
          aria-label="facebook_icon">
          <SvgSpriteIcon fontSize="medium" svgSpriteId={'facebook_icon'} />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default FooterBottom;
