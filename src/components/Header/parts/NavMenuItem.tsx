import { FC } from 'react';
import { ListItem, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useActiveLink from '@/hooks/useActiveLink';

interface NavMenuItemProp {
  href: string;
  title: string;
  onCloseMobileMenu?: () => void;
}

const NavMenuItem: FC<NavMenuItemProp> = ({ href, title, onCloseMobileMenu }) => {
  const isActiveLink = useActiveLink(href);

  return (
    <ListItem
      disablePadding
      sx={{
        width: 'auto',
      }}>
      <Box
        component={Link}
        to={href}
        onClick={onCloseMobileMenu}
        sx={{
          py: { xs: 1, lg: 0 },
          width: '100%',
          color: (theme) => (isActiveLink ? theme.palette.primary.main : theme.palette.text.primary),
          transition: (theme) => theme.transitions.create('color'),
          '&:hover': { color: (theme) => theme.palette.primary.dark },
        }}>
        <Typography variant="navigationKyiv" component="span">
          {title}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default NavMenuItem;
