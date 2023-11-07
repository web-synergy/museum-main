import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import ButtonWithIcon from '../../Common/ButtonWithIcon';
import Slider from './Slider';
import { getEvents } from '@/api';
import { EventsPreviewSection, EmptyEventsSection } from './styles';

interface Event {
  title: string;
  begin: string;
  end: string;
  description: string;
  banner: string;
  slug: string;
}

const EventsPreview: FC = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEvents(6, 0);
        const { content } = response.data;
        setEventsData(content);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  if (eventsData.length === 0 || loading) {
    return <EmptyEventsSection />;
  }

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
        <Slider sliderInfo={eventsData} />
      </Container>
    </EventsPreviewSection>
  );
};

export default EventsPreview;
