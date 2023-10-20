import { FC } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useActiveLink from '@/hooks/useActiveLink';

interface ItemProps {
  href: string;
  title: string;
}

const Item: FC<ItemProps> = ({ href, title }) => {
  const isActiveLink = useActiveLink(href);

  return (
    <MenuItem
      disableRipple
      disableTouchRipple
      sx={{
        padding: 0,
        color: (theme) => (isActiveLink ? theme.palette.common.black : theme.palette.gray.main),
        '&:hover': {
          color: (theme) => theme.palette.primary.dark,
          backgroundColor: 'transparent',
        },
      }}>
      <Typography variant="body1" fontWeight={600}>
        <Link to={href}>{title}</Link>
      </Typography>
    </MenuItem>
  );
};

export default Item;
