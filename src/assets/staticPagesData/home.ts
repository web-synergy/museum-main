import famousArtistBig1 from '@/assets/images/famous-artist/1-big.webp';
import famousArtistBig2 from '@/assets/images/famous-artist/2-big.webp';
import famousArtistBig3 from '@/assets/images/famous-artist/3-big.webp';
import famousArtistBig4 from '@/assets/images/famous-artist/4-big.webp';
import famousArtistBig5 from '@/assets/images/famous-artist/5-big.webp';
import famousArtistSmall1 from '@/assets/images/famous-artist/1-small.webp';
import famousArtistSmall2 from '@/assets/images/famous-artist/2-small.webp';
import famousArtistSmall3 from '@/assets/images/famous-artist/3-small.webp';
import famousArtistSmall4 from '@/assets/images/famous-artist/4-small.webp';
import famousArtistSmall5 from '@/assets/images/famous-artist/5-small.webp';
import museumHistoryDesktop from '@/assets/images/about-history/desktop.webp';
import museumHistoryTablet from '@/assets/images/about-history/small.webp';
import slide1_des from '@/assets/images/main-slider/img1_desktop.webp';
import slide2_des from '@/assets/images/main-slider/img2_desktop.webp';
import slide3_des from '@/assets/images/main-slider/img3_desktop.webp';
import slide4_des from '@/assets/images/main-slider/img4_desktop.webp';
import slide5_des from '@/assets/images/main-slider/img5_desktop.webp';
import slide1_tab from '@/assets/images/main-slider/img1_tablet.webp';
import slide2_tab from '@/assets/images/main-slider/img2_tablet.webp';
import slide3_tab from '@/assets/images/main-slider/img3_tablet.webp';
import slide4_tab from '@/assets/images/main-slider/img4_tablet.webp';
import slide5_tab from '@/assets/images/main-slider/img5_tablet.webp';

export const homeData = {
  famousArtImages: [
    { src: { small: famousArtistSmall1, big: famousArtistBig1 }, alt: 'famous_artist', size: 'big' },
    { src: { small: famousArtistSmall2, big: famousArtistBig2 }, alt: 'famous_artist', size: 'big' },
    { src: { small: famousArtistSmall3, big: famousArtistBig3 }, alt: 'famous_artist', size: 'big' },
    { src: { small: famousArtistSmall4, big: famousArtistBig4 }, alt: 'famous_artist', size: 'small' },
    { src: { small: famousArtistSmall5, big: famousArtistBig5 }, alt: 'famous_artist', size: 'small' },
  ],
  about_history: {
    text: {
      text1: `Музей-майстерня І. П. Кавалерідзе заснована у 1993 році за підтримки Київської міської держадміністрації та Національної спілки кінематографістів України.
      `,
      text2: `Музей розташований на Андріївському узвозі, в будинку, де Іван Петрович Кавалерідзе, відомий український скульптор і кінорежисер працював над пам'ятником княгині Ольги.`,
    },
    src: { big: museumHistoryDesktop, small: museumHistoryTablet },
  },
  mainSlider: [
    { desktop: slide1_des, mobile: slide1_tab },
    { desktop: slide2_des, mobile: slide2_tab },
    { desktop: slide3_des, mobile: slide3_tab },
    { desktop: slide4_des, mobile: slide4_tab },
    { desktop: slide5_des, mobile: slide5_tab },
  ],
};
