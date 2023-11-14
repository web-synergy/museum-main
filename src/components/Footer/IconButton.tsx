import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Logo from '@/assets/images/logo.svg';

export const MainIconBlok = () => {
  return (
    <Box>
      <Link to={'/'} aria-label="Повернутись на головну сторінку">
        <img src={Logo} alt="Логотип Музею-Мастерні ім. Івана Кавалерідзе"></img>
      </Link>
    </Box>
  );
};

export const ButtonBlok = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: { xs: 'center', lg: 'start' },
      }}>
      <ButtonWithIcon
        sx={{ width: { md: '280px', lg: '261px' } }}
        title="Підтримати музей"
        component={Link}
        to={'/donation'}
        svgSpriteId="support_icon"
      />
    </Box>
  );
};
