import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, styled, Box, Typography } from '@mui/material';
import ButtonWithIcon from '../../Common/ButtonWithIcon';
import { dataInfo } from './fakeData';
import Slider from './Slider';

const EventsPreviewSection = styled('section')(({ theme }) => ({
  position: 'relative',
  paddingTop: '60px',
  paddingBottom: '60px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '80px',
    paddingBottom: '80px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '120px',
    paddingBottom: '120px',
  },
}));

const EventsPreview: FC = () => {
  return (
    <EventsPreviewSection>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            gap: { xs: '24px', md: '0' },
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            marginBottom: { xs: '24px', md: '32px', lg: '40px' },
          }}>
          <Typography variant="h1" component="h2">
            Події музею
          </Typography>
          <ButtonWithIcon
            variant="tertiary"
            component={RouterLink}
            to="/events"
            svgSpriteId="breadcrumbsSeparator_icon"
            title="Дивитись усі події"
          />
        </Box>
        <Slider fakeData={dataInfo} />
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
