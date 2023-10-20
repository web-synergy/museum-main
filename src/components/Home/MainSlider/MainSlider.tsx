import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Section from '../../Common/Section';
import slide1_des from '@/assets/images/main-slider/img1_desktop.jpg';
import slide2_des from '@/assets/images/main-slider/img2_desktop.jpg';
import slide3_des from '@/assets/images/main-slider/img3_desktop.jpg';
import slide4_des from '@/assets/images/main-slider/img4_desktop.jpg';
import slide5_des from '@/assets/images/main-slider/img5_desktop.jpg';
import slide1_tab from '@/assets/images/main-slider/img1_tablet.jpg';
import slide2_tab from '@/assets/images/main-slider/img2_tablet.jpg';
import slide3_tab from '@/assets/images/main-slider/img3_tablet.jpg';
import slide4_tab from '@/assets/images/main-slider/img4_tablet.jpg';
import slide5_tab from '@/assets/images/main-slider/img5_tablet.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './MainSlider.css';

const MainSlider: FC = () => {
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
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={slide1_des} type="image/webp"></source>
              <source media="(min-width: 768px)" srcSet={slide1_tab} type="image/webp"></source>
              <img src={slide1_tab} alt="slide_image" loading="lazy" width="100%" height="100%" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={slide2_des} type="image/webp"></source>
              <source media="(min-width: 768px)" srcSet={slide2_tab} type="image/webp"></source>
              <img src={slide2_tab} alt="slide_image" loading="lazy" width="100%" height="100%" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={slide3_des} type="image/webp"></source>
              <source media="(min-width: 768px)" srcSet={slide3_tab} type="image/webp"></source>
              <img src={slide3_tab} alt="slide_image" loading="lazy" width="100%" height="100%" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={slide4_des} type="image/webp"></source>
              <source media="(min-width: 768px)" srcSet={slide4_tab} type="image/webp"></source>
              <img src={slide4_tab} alt="slide_image" loading="lazy" width="100%" height="100%" />
            </picture>
          </SwiperSlide>
          <SwiperSlide className="swiper_slide2">
            <picture>
              <source media="(min-width: 1280px)" srcSet={slide5_des} type="image/webp"></source>
              <source media="(min-width: 768px)" srcSet={slide5_tab} type="image/webp"></source>
              <img src={slide5_tab} alt="slide_image" loading="lazy" width="100%" height="100%" />
            </picture>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default MainSlider;
