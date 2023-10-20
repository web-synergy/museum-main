import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, styled, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import data from '@/assets/siteData';
import useActiveLink from '@/hooks/useActiveLink';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const {
  menuList: { main },
} = data;

const { phone, email, location, workingHours } = data.general;
interface IListTextProps {
  title: string;
  svg: string;
}
interface IListLinkTextProps {
  title: string;
  svg?: string;
  href: string;
}

const MyList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px',
}));

const ListNavigation = ({ title, href }: IListLinkTextProps) => {
  const theme = useTheme();
  const isActiveLink = useActiveLink(href);

  return (
    <ListItem sx={{ p: '0px' }} key={title} disablePadding>
      <Box
        component={Link}
        to={href}
        sx={{
          py: 0,
          width: '100%',
          color: isActiveLink ? theme.palette.primary.main : theme.palette.text.primary,
          transition: (theme) => theme.transitions.create('color'),
          '&:hover': { color: theme.palette.primary.dark },
        }}>
        <Typography variant="navigationRale" component="span">
          {title}
        </Typography>
      </Box>
    </ListItem>
  );
};

export const NavRedder = () => (
  <MyList sx={{ gap: { xs: '17.8px', ld: '20.1px' } }} disablePadding>
    {main.map(({ href, title }: IListLinkTextProps) => (
      <ListNavigation key={href} title={title} href={href} />
    ))}
  </MyList>
);

const ListTypography = ({ title, svg }: IListTextProps) => (
  <ListItem sx={{ p: '0px' }} disablePadding>
    <ListItemIcon sx={{ minWidth: '32px', color: 'inherit' }}>
      <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
    </ListItemIcon>
    <ListItemText sx={{ m: '0px' }} primary={<Typography variant="navigationRale">{title}</Typography>}></ListItemText>
  </ListItem>
);
export const ListContacts = () => (
  <MyList sx={{ gap: { xs: '24px', lg: '20.1px' } }} disablePadding>
    <ListContactItem href={`tel:${phone}`} title={phone} svg="phone_icon" />
    <ListContactItem href={`mailto:${email}`} title={email} svg="email_icon" />
    <ListTypography title={location} svg="location_icon" />
    <ListTypography title={workingHours} svg="clock_icon" />
  </MyList>
);

const ListContactItem = ({ title, svg = '', href = '#' }: IListLinkTextProps) => {
  return (
    <ListItem sx={{ p: '0px' }} disablePadding>
      <Link to={href}>
        <Stack
          sx={{
            transition: (theme) => theme.transitions.create('color'),
            '&:hover': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
          gap={1}
          direction={'row'}>
          <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
          <Typography variant="navigationRale">{title}</Typography>
        </Stack>
      </Link>
    </ListItem>
  );
};
