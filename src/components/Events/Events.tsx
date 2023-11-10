import { Grow, Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getEvents } from '@/api';
import { useFetch } from '@/hooks/useFetch';
import { formatDate } from '@/helpers/formatDate';
import { truncateDescription } from '@/helpers/truncateString';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Section from '../Common/Section';
import Loader from '../Loader/Loader';
import Banner from './Banner';
import { WrapperImg } from './styles';
import { IEvent, IMuseumEventData } from '@/types';

const imageUrl = `${import.meta.env.VITE_IMAGE_SERVER_URL}`;

const Events: FC = () => {
  const [cardsEvent, setCardsEvent] = useState<IEvent[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalEvents, setTotalEvents] = useState<number>(0);
  const [pageSize, setPageSize] = useState(4);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const paramRequest = useCallback(() => getEvents(4, currentPage), [currentPage]);

  const { data, isFulfilled } = useFetch<IMuseumEventData, unknown>(paramRequest);

  useEffect(() => {
    if (isFulfilled) {
      setIsLoading(false);
      const totalEvents = data?.totalElements || 0;
      const content = data?.content || [];

      setCardsEvent((prevEvents) => [...prevEvents, ...content]);
      setTotalEvents(totalEvents);
    }
  }, [data, isFulfilled]);

  const handlerLoadMore = () => {
    setIsButtonLoading(true);
    setCurrentPage((prevPage) => prevPage + 1);
    setPageSize((prevPage) => prevPage + 3);
    setIsButtonLoading(false);
  };

  const bannerEvent = cardsEvent[0];
  const visibleEvents = cardsEvent.slice(1, pageSize);
  return (
    <Section variant="light">
      {isLoading && <Loader visible={isLoading} />}
      {cardsEvent.length === 0 && isFulfilled && <div>"Слідкуйте за подіями! В найближчий час тут буде багато цікавого!"</div>}

      {!isLoading && cardsEvent.length > 0 && (
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
            {visibleEvents.slice(0, cardsEvent.length).map((event) => (
              <Grow key={event.slug} in={true} timeout={1200}>
                <Container sx={{ borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
                  <Box sx={{ padding: { xs: '24px 0' } }}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                        gap: { xs: '16px', md: '24px', lg: '48px' },
                      }}>
                      <WrapperImg>
                        <img src={`${imageUrl}?filename=${event.banner}&type=${isSmallScreen ? 'PREVIEW' : 'ORIGINAL'}`} alt="event logo" />
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
                          to={event.slug}
                          svgSpriteId="breadcrumbsSeparator_icon"
                          title="Читати далі"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </Grow>
            ))}
          </Box>
          <Box sx={{ width: '100%', textAlign: 'center', marginBottom: { xs: '60px', md: '80px' } }}>
            {currentPage * pageSize < totalEvents && !isButtonLoading && (
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
