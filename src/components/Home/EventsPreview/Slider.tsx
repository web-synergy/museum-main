import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { WrapperImg } from './styles';

interface IDataSliderProps {
  mainTitle: string;
  dataPublication: string;
  cardTitle: string;
  dataPerformance: string;
  description: string;
  img: string;
}

interface IFullData {
  fakeData: IDataSliderProps[];
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles for Swiper
import './sliderStyles.css';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

const Slider: FC<IFullData> = ({ fakeData }) => {
  const truncateDescription = (string: string, maxLength: number): string => {
    return string.length >= maxLength ? string.slice(0, maxLength) + '...' : string;
  };

  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      speed={700}
      spaceBetween={80}
      modules={[Navigation, Pagination, Keyboard]}
      className="mySwiper">
      {fakeData.map(({ cardTitle, dataPerformance, description, img }, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: { xs: '24px', lg: '26px' } }}>
            <Box sx={{ width: { xs: '100%', lg: '452px' }, display: 'flex', flexDirection: 'column', gap: { xs: '24px', lg: '40px' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography sx={{ fontWeight: '500' }} variant="h3Kyiv" component="h3">
                  {cardTitle}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: '600' }}>
                  {dataPerformance}
                </Typography>
                <Typography variant="caption">{truncateDescription(description, 150)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  component={RouterLink}
                  to={`events/${cardTitle}`}
                  variant="secondary"
                  sx={{ width: { xs: '288px', md: '242px', lg: '248px' }, height: '48px', fontSize: { xs: '16px', lg: '18px' } }}>
                  Детальніше про подію
                </Button>
              </Box>
            </Box>
            <WrapperImg sx={{}}>
              <img src={img} alt="picture" />
            </WrapperImg>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
