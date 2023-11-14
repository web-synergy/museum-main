import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Section from '../../Common/Section';
import { homeData } from '@/assets/staticPagesData/home';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './MainSlider.css';

const MainSlider: FC = () => {
  const { mainSlider } = homeData;
  return (
    <>
      <Container>
        <Section
          variant="light"
          sx={{ marginTop: { xs: '60px', md: '80px', lg: '120px' }, marginBottom: { xs: '24px', md: '32px', lg: '40px' } }}>
          <Typography variant="h1" component="h2">
            Вас вітає музей-майстерня Івана Кавалерідзе!
          </Typography>
        </Section>
      </Container>
      <Box sx={{ mx: 'auto', minWidth: 320, maxWidth: 2000 }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          breakpoints={{
            0: {
              spaceBetween: 24,
              coverflowEffect: { rotate: 0, stretch: 55, depth: 0, modifier: 1, slideShadows: true, scale: 0.65 },
            },
            768: {
              spaceBetween: 40,
              coverflowEffect: { rotate: 0, stretch: 65, depth: 100, modifier: 1, slideShadows: true, scale: 0.65 },
            },
            1280: {
              spaceBetween: 80,
              coverflowEffect: { rotate: 0, stretch: 140, depth: 100, modifier: 1, slideShadows: true, scale: 0.59 },
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper2">
          {mainSlider.map((slide, index) => (
            <SwiperSlide className="swiper_slide2" key={index}>
              <picture>
                <source media="(min-width: 1280px)" srcSet={slide.desktop} type="image/webp"></source>
                <source media="(min-width: 768px)" srcSet={slide.mobile} type="image/webp"></source>
                <img src={slide.mobile} alt={`Зображення до слайду ${index + 1}`} loading="lazy" width="100%" height="100%" />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default MainSlider;
