import { FC, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, useTheme } from '@mui/material';
import ButtonWithIcon from '../Common/ButtonWithIcon';
import Section from '../Common/Section';
import { dataInfo } from './fakeData';
import Banner from './Banner';
import { WrapperImg } from './styles';
import { truncateDescription } from '../../helpers/truncateString';
import Loader from '../Loader/Loader';
import { getEvents } from '@/api';

const Events: FC = () => {
  const [cardsEvent, setСardsEvent] = useState(dataInfo);
  const [visibleItems, setVisibleItems] = useState(3);
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEvents(30, 0);
        console.log(response.data);
        setСardsEvent(response.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlerLoadMore = () => {
    setVisibleItems((prevValue) => prevValue + 3);
  };

  const bannerEvent = dataInfo[0];

  const otherEvents = dataInfo.slice(1);

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
            {otherEvents.slice(0, visibleItems).map((item, index) => (
              <Container key={index} sx={{ borderBottom: `1px solid ${theme.palette.gray.main} ` }}>
                <Box sx={{ padding: { xs: '24px 0' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { md: '1fr 1fr', lg: '494px 436px' },
                      gap: { xs: '16px', md: '24px', lg: '48px' },
                    }}>
                    <WrapperImg>
                      <img src={item.img} alt="" />
                    </WrapperImg>
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                        }}>
                        <Typography variant="h2">{truncateDescription(item.cardTitle, 100)}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: '600' }}>
                          {item.dataPerformance}
                        </Typography>
                        <Typography variant="caption">{truncateDescription(item.description, 150)}</Typography>
                      </Box>
                      <ButtonWithIcon
                        variant="tertiary"
                        component={RouterLink}
                        sx={{ marginTop: '24px' }}
                        to={dataInfo[index].cardTitle}
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
