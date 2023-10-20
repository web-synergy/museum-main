import { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideWrapper, SlideOverlay, SlideDescriptionBox } from './stylesComponents';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles for Swiper
import './sliderStyles.css';

// import required modules
import { EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';

interface SliderItemProps {
  imageLink: { tablet: string; desktop: string };
  imageLabel: string;
}

interface SliderContentProps {
  columns: 1 | 2;
  images: SliderItemProps[];
}

const SliderContent: FC<SliderContentProps> = ({ images, columns }) => {
  return (
    <Grid item xs={12} md={columns === 1 ? 6 : 12}>
      <Box
        sx={{
          position: 'relative',
          paddingBottom: { xs: '50px', md: '60px', lg: '82px' },
        }}>
        <Swiper
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          keyboard={true}
          spaceBetween={30}
          modules={[EffectFade, Navigation, Pagination, Keyboard]}
          className="historySwiper">
          {images.map(({ imageLink, imageLabel }, index) => (
            <SwiperSlide key={index}>
              <SlideWrapper>
                <picture>
                  <source srcSet={imageLink.desktop} media="(min-width: 768px)" />
                  <img src={imageLink.tablet} alt={imageLabel} />
                </picture>

                <SlideOverlay />
                <SlideDescriptionBox>
                  <Typography
                    variant="body1"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                    }}>
                    {imageLabel}
                  </Typography>
                </SlideDescriptionBox>
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Grid>
  );
};

export default SliderContent;
