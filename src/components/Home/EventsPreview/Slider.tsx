import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { truncateDescription } from '@/helpers/truncateString';
import { WrapperImg } from './styles';

const imageUrl = `${import.meta.env.VITE_IMAGE_SERVER_URL}`;

interface IDataSliderProps {
  title: string;
  begin: string;
  end: string;
  description: string;
  banner: string;
  slug: string;
}

interface IFullData {
  sliderInfo: IDataSliderProps[];
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles for Swiper
import './sliderStyles.css';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { formatDate } from '@/helpers/formatDate';

const Slider: FC<IFullData> = ({ sliderInfo }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
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
      {sliderInfo.map((event) => (
        <SwiperSlide key={event.slug}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, gap: { xs: '24px', lg: '26px' } }}>
            <Box sx={{ width: { xs: '100%', lg: '452px' }, display: 'flex', flexDirection: 'column', gap: { xs: '24px', lg: '40px' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography sx={{ fontWeight: '500' }} variant="h3Kyiv" component="h3">
                  {event.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: '600' }}>
                  {formatDate(event.begin, event.end)}
                </Typography>
                <Typography variant="caption">{truncateDescription(event.description, 150)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  component={RouterLink}
                  to={`events/${event.slug}`}
                  variant="secondary"
                  sx={{ width: { xs: '288px', md: '242px', lg: '248px' }, height: '48px', fontSize: { xs: '16px', lg: '18px' } }}>
                  Детальніше про подію
                </Button>
              </Box>
            </Box>
            <WrapperImg sx={{}}>
              <img src={`${imageUrl}?filename=${event.banner}&type=${isSmallScreen ? 'PREVIEW' : 'ORIGINAL'}`} alt="event logo" />
            </WrapperImg>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
