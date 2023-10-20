import { Box, Stack, styled } from '@mui/material';
import { ListContacts, NavRedder } from './FooterListItem';
import { ButtonBlok, MainIconBlok } from './IconButton';

export const MyBoxTabletStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.only('md')]: {
    justifyContent: 'space-between',
  },
}));

function TabletFooter() {
  return (
    <Stack direction="column" gap={'48px'} justifyContent="space-between" width="100%">
      <MyBoxTabletStyle>
        <MainIconBlok />
        <ButtonBlok />
      </MyBoxTabletStyle>
      <MyBoxTabletStyle>
        <NavRedder />
        <ListContacts />
      </MyBoxTabletStyle>
    </Stack>
  );
}

export default TabletFooter;
