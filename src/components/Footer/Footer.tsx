import { Box, Divider, styled, useMediaQuery, useTheme } from '@mui/material';
import Section from '../Common/Section.tsx';
import FooterBottom from './FooterBottom.tsx';
import { ListContacts, NavRedder } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';

const WrapperFooter = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0px 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '0px 40px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0px  16px',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Section variant="dark">
      <Box component={'footer'}>
        <WrapperFooter>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { lg: 'row', md: 'column', xs: 'column' },
              width: '100%',
              gap: { xs: 5, md: 0 },
              py: { xs: '48px', lg: '24px' },
            }}>
            {isTablet ? (
              <TabletFooter />
            ) : (
              <>
                {/* Desktop Mobile menu */}
                <MainIconBlok />
                <NavRedder />
                <ListContacts />
                <ButtonBlok />
              </>
            )}
          </Box>
        </WrapperFooter>
        <Divider />
        {/* FooterBottom */}
        <WrapperFooter>
          <FooterBottom />
        </WrapperFooter>
      </Box>
    </Section>
  );
};
export default Footer;
