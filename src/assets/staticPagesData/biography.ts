import { IPage } from '@/types';
import image1 from '@/assets/images/kavaleridze/biography1.jpg';
import image2 from '@/assets/images/kavaleridze/biography2.jpg';
import image3 from '@/assets/images/kavaleridze/biography3.jpg';
import image4 from '@/assets/images/kavaleridze/biography4.jpg';

export const biographyDate: IPage = {
  title: 'Біографія',
  content: [
    {
      type: 'text',
      textContent:
        '13 квітня 1887 року — на хуторі Ладанському на Сумщині народився Іван Кавалерідзе, скульптор, кінорежисер, драматург. Народився в селянській сім’ї нащадків грузинського князівського роду, чиї предки після завоювання Росією Кавказу були привезені в Україну. ',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'У 1909 — 1910-му Іван навчався у Петербурзькій академії мистецтв у Іллі Гінцбурга. У 1910 — 1911-му вдосконалював свою майстерність у Парижі, у приватній студії Наума Аронсона. У 1915-му Кавалерідзе мобілізували до царської армії. У 1918 — 1928 роках працював у відділі народної освіти в Ромнах.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image1, desktop: image1 },
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image2, desktop: image2 },
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Працюючи там у відділі народної освіти, він викладав малювання у 6 школах, вів міський драмгурток і був головним режисером Роменського пересувного робітничо-селянського театру з 1925 по 1930 роки. У 1928 — 1933-му — режисер Одеської кінофабрики.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'У 1934 — 1941-му — режисер Київської кіностудії “Українфільм”. У 1957 — 1962-му — режисер Кіностудії імені Олександра Довженка. До самої смерті Кавалерідзе працював скульптором і писав п’єси. Помер у Києві 3 грудня 1978 року.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image3, desktop: image3 },
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image4, desktop: image4 },
      columns: 1,
    },
  ],
};
