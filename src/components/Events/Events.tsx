import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, useTheme } from '@mui/material';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Section from '../Common/Section';
// import { dataInfo } from './fakeData';
import Banner from './Banner';
import { WrapperImg } from './styles';
import { truncateDescription } from '../../helpers/truncateString';
import Loader from '../Loader/Loader';
import { getEvents } from '@/api';

interface Event {
  id: string;
  title: string;
  begin: string;
  summary: string;
  banner: string;
}

const Events: FC = () => {
  const [cardsEvent, setCardsEvent] = useState<Event[]>([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  console.log(cardsEvent);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEvents(30, 0);

        setCardsEvent(response.data.content);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(cardsEvent);

  const handlerLoadMore = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  const bannerEvent = cardsEvent[0];

  const otherEvents = cardsEvent.slice(1);

  return (
    <Section variant="light">
      {loading && <Loader visible={loading} />}

      {!loading && (
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
            {otherEvents.slice(0, visibleItems).map((event, index) => (
              <Container key={index} sx={{ borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
                <Box sx={{ padding: { xs: '24px 0' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                      gap: { xs: '16px', md: '24px', lg: '48px' },
                    }}>
                    <WrapperImg>
                      <img src={event.banner} alt="" />
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
                          {event.begin}
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
            {visibleItems < otherEvents.length && (
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
