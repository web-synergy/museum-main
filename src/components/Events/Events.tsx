import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getEvents } from '@/api';
import { formatDate } from '@/helpers/formatDate';
import { truncateDescription } from '@/helpers/truncateString';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Section from '../Common/Section';
import Loader from '../Loader/Loader';
import Banner from './Banner';
import { WrapperImg } from './styles';

const imageUrl = `${import.meta.env.VITE_IMAGE_SERVER_URL}`;

interface Event {
  id: string;
  title: string;
  begin: string;
  end: string;
  summary: string;
  banner: string;
  slug: string;
}

const Events: FC = () => {
  const [cardsEvent, setCardsEvent] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalEvents, setTotalEvents] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState(4);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEvents(4, currentPage);
        const { content, totalElements } = response.data;

        setCardsEvent((prevEvents) => [...prevEvents, ...content]);
        setTotalEvents(totalElements);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlerLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setPageSize((prevPage) => prevPage + 3);
  };

  const bannerEvent = cardsEvent[0];
  const visibleEvents = cardsEvent.slice(1, pageSize);

  return (
    <Section variant="light">
      {loading && <Loader visible={loading} />}
      {cardsEvent.length === 0 && !loading && <div>На даний момент немає актуальних подій</div>}

      {cardsEvent.length > 0 && !loading && (
        <>
          <Banner event={bannerEvent} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '32px', lg: '40px' },
              marginTop: { xs: '32px', md: '44px' },
              paddingBottom: { xs: '40px', md: '32px' },
            }}>
            {visibleEvents.slice(0, cardsEvent.length).map((event, index) => (
              <Container key={event.slug} sx={{ borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
                <Box sx={{ padding: { xs: '24px 0' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                      gap: { xs: '16px', md: '24px', lg: '48px' },
                    }}>
                    <WrapperImg>
                      <img src={`${imageUrl}?filename=${event.banner}&type=ORIGINAL`} alt="event logo" />
                    </WrapperImg>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}>
                        <Typography variant="h2">{truncateDescription(event.title, 100)}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600' }}>
                          {formatDate(event.begin, event.end)}
                        </Typography>
                        <Typography variant="caption">{truncateDescription(event.summary, 150)}</Typography>
                      </Box>
                      <ButtonWithIcon
                        variant="tertiary"
                        component={RouterLink}
                        sx={{ marginTop: '24px' }}
                        to={cardsEvent[index].title}
                        svgSpriteId="breadcrumbsSeparator_icon"
                        title="Читати далі"
                      />
                    </Box>
                  </Box>
                </Box>
              </Container>
            ))}
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center', marginBottom: { xs: '60px', md: '80px' } }}>
            {totalEvents > 4 && currentPage * pageSize < totalEvents && (
              <Button sx={{ width: '248px' }} onClick={handlerLoadMore} variant="secondary">
                Показати більше
              </Button>
            )}
          </Box>
        </>
      )}
    </Section>
  );
};

export default Events;
