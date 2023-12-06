import { useState } from 'react';
import { Box, IconButton, Link, Stack, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import TeamCardModal from '../TeamCardModal/TeamCardModal';
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
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        sx={{
          color: (theme) => theme.palette.text.secondary,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          wight: '100%',
          textAlign: 'center',
          p: '24px',
          gap: '18px',
        }}>
        <Typography variant="navigationRaleFooter">
          <>
            {'\u00A9 Created by '}
            <TextLink sx={{ color: '#A17D21' }} underline="always" onClick={handleClick}>
              team
            </TextLink>
            {'.'}
            {isMobile ? <br /> : ''}

            {' Всі права захищені'}
          </>
        </Typography>
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
      <TeamCardModal handleClose={handleClick} open={open} />
    </>
  );
};
export default FooterBottom;
