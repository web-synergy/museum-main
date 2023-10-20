import { List, styled, ListItem, Typography, Box, Link, Button } from '@mui/material';

export const ContactLink = styled(Link)({
  color: 'inherit',
  display: 'inline-block',
  marginBottom: '16px',
});

export const ContactList = styled(List)(({ theme }) => ({
  maxWidth: '736px',
  margin: 'auto',
  color: theme.palette.common.black,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

export const ContactPaper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  padding: '24px 0 60px',

  [theme.breakpoints.up('md')]: {
    padding: '48px 0 80px',
  },

  [theme.breakpoints.up('lg')]: {
    padding: '48px 0 120px',
  },
}));

export const ContactItem = styled(ListItem)(({ theme }) => ({
  display: 'block',
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.gray.dark,
  padding: 0,
}));

export const Title = styled(Typography)({
  display: 'block',
  marginBottom: '16px',
});
export const SubTitle = styled(Typography)({
  display: 'inline-block',
  fontWeight: 600,
});
export const BoxContact = styled(Box)({
  fontSize: '14px',
  fontWeight: 400,
  marginBottom: '16px',
});

export const Paragraph = styled(Typography)({
  margin: 0,
});

export const ContactButton = styled(Button)({
  marginBottom: '16px',
  padding: 0,
  color: 'inherit',
});
