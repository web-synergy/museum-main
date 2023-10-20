import famousArtistBig1 from '@/assets/images/famous-artist/1-big.jpg';
import famousArtistBig2 from '@/assets/images/famous-artist/2-big.jpg';
import famousArtistBig3 from '@/assets/images/famous-artist/3-big.jpg';
import famousArtistBig4 from '@/assets/images/famous-artist/4-big.jpg';
import famousArtistBig5 from '@/assets/images/famous-artist/5-big.jpg';
import famousArtistSmall1 from '@/assets/images/famous-artist/1-small.jpg';
import famousArtistSmall2 from '@/assets/images/famous-artist/2-small.jpg';
import famousArtistSmall3 from '@/assets/images/famous-artist/3-small.jpg';
import famousArtistSmall4 from '@/assets/images/famous-artist/4-small.jpg';
import famousArtistSmall5 from '@/assets/images/famous-artist/5-small.jpg';
import museumHistoryDesktop from '@/assets/images/about-history/desktop.jpg';
import museumHistoryTablet from '@/assets/images/about-history/small.jpg';

const siteData = {
  general: {
    workingHours: 'Вт-Нд 11:00 – 18:00',
    location: 'Андріївський узвіз, 21, Київ',
    phone: '(044) 425-33-97',
    email: 'kavaleridzemuseum@gmail.com',
    mainTitle: `Музей-майстерня
Івана Кавалерідзе`,
  },
  buttonsLabels: {
    tickets: 'Квитки',
    support: 'Підтримати музей',
    share: 'Поділитись сайтом',
    more: 'Читати більше',
  },
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
  menuList: {
    main: [
      {
        title: 'Головна',
        href: '/',
      },
      {
        title: 'Історія музею',
        href: '/history',
      },
      {
        title: 'Події',
        href: '/events',
      },
      {
        title: 'Іван Кавалерідзе',
        href: '/about',
      },
      {
        title: 'Контакти',
        href: '/contacts',
      },
    ],
    burgerSubMenu: [
      {
        title: 'Митець',
        href: '/about/artist',
      },
      {
        title: 'Біографія',
        href: '/about/biography',
      },
      {
        title: 'Кіно',
        href: '/about/movie',
      },
      {
        title: 'Скульптура',
        href: '/about/sculpture',
      },
      {
        title: 'Митець і Київ',
        href: '/about/kyiv',
      },
    ],
    other: [
      {
        title: 'Результати пошуку',
        href: '/search',
      },
      {
        title: 'Квитки',
        href: '/tickets',
      },
      {
        title: 'Підтримати музей',
        href: '/donation',
      },
    ],
  },
};

export const routing = [...siteData.menuList.main, ...siteData.menuList.burgerSubMenu, ...siteData.menuList.other];

export default siteData;
