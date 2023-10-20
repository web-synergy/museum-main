import { IPage } from '@/types';
import sliderDesktop1 from '@/assets/images/museum-history/1-desktop.jpg';
import sliderDesktop2 from '@/assets/images/museum-history/2-desktop.jpg';
import sliderDesktop3 from '@/assets/images/museum-history/3-desktop.jpg';
import sliderDesktop4 from '@/assets/images/museum-history/4-desktop.jpg';
import sliderDesktop5 from '@/assets/images/museum-history/5-desktop.jpg';
import sliderDesktop6 from '@/assets/images/museum-history/6-desktop.jpg';
import sliderDesktop7 from '@/assets/images/museum-history/7-desktop.jpg';
import sliderDesktop8 from '@/assets/images/museum-history/8-desktop.jpg';
import sliderDesktop9 from '@/assets/images/museum-history/9-desktop.jpg';
import sliderTablet1 from '@/assets/images/museum-history/1-tablet.jpg';
import sliderTablet2 from '@/assets/images/museum-history/2-tablet.jpg';
import sliderTablet3 from '@/assets/images/museum-history/3-tablet.jpg';
import sliderTablet4 from '@/assets/images/museum-history/4-tablet.jpg';
import sliderTablet5 from '@/assets/images/museum-history/5-tablet.jpg';
import sliderTablet6 from '@/assets/images/museum-history/6-tablet.jpg';
import sliderTablet7 from '@/assets/images/museum-history/7-tablet.jpg';
import sliderTablet8 from '@/assets/images/museum-history/8-tablet.jpg';
import sliderTablet9 from '@/assets/images/museum-history/9-tablet.jpg';
import image1 from '@/assets/images/museum-history/image-1.jpg';
import image2 from '@/assets/images/museum-history/image-2.jpg';
import image3 from '@/assets/images/museum-history/image-3.jpg';
import image4 from '@/assets/images/museum-history/image-4.jpg';

export const museumData: IPage = {
  title: 'Музей-майстерня І.Кавалерідзе — історія довжиною в життя',
  content: [
    {
      type: 'slider',
      images: [
        { imageLink: { desktop: sliderDesktop1, tablet: sliderTablet1 }, imageLabel: 'Музей-майстерня відкритий 15 листопада 1993.' },
        {
          imageLink: { desktop: sliderDesktop2, tablet: sliderTablet2 },
          imageLabel:
            'Музей відкрито за розпорядженням Представника Президента України в м. Києві Леоніда Косаківського та за ініціативи видатних діячів культури, політиків.',
        },
        {
          imageLink: { desktop: sliderDesktop3, tablet: sliderTablet3 },
          imageLabel:
            'Засновниками музею є Нонна Капельгородська — племінниця Івана Кавалерідзе, кінознавець, науковий працівник та Ростислав Синько —український кінорежисер.',
        },
        {
          imageLink: { desktop: sliderDesktop4, tablet: sliderTablet4 },
          imageLabel:
            'Він розмістився у будинку, де видатний український діяч Іван Петрович Кавалерідзе в 1911 році працював над проектом пам’ятника княгині Ользі.',
        },
        {
          imageLink: { desktop: sliderDesktop5, tablet: sliderTablet5 },
          imageLabel: 'У музеї зберігається понад 5000 експонатів, присвячених життю і творчості майстра.',
        },
        {
          imageLink: { desktop: sliderDesktop6, tablet: sliderTablet6 },
          imageLabel:
            'У музеї демонструються проекти пам‘ятників, станкові скульптури, які зображують Тараса Шевченка, Григорія Сковороду, Лесю Українку, Миколу Амосова та інших видатних людей.',
        },
        {
          imageLink: { desktop: sliderDesktop7, tablet: sliderTablet7 },
          imageLabel: 'Для огляду постійно відкрита меморіальна кімната — кабінет Івана Петровича.',
        },
        {
          imageLink: { desktop: sliderDesktop8, tablet: sliderTablet8 },
          imageLabel: 'До уваги відвідувачів — оглядова екскурсія, відеозаписи кінофільмів І. Кавалерідзе.',
        },
        {
          imageLink: { desktop: sliderDesktop9, tablet: sliderTablet9 },
          imageLabel: 'При музеї працює художня галерея, де експонуються твори сучасного образотворчого мистецтва України. ',
        },
      ],
      columns: 2,
    },
    {
      type: 'text',
      textContent:
        'Іван Кавалерідзе — видатна особистість, талановитий скульптор, великий кінорежисер і драматург. Він, безумовно, геній минулого століття, “український Мікеланджело”, як його називали. ',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Для тих, хто ще не знайомий з його творами мистецтва, створений Музей-майстерня Івана Кавалерідзе в місті Києві. Крім того, в музей-майстерні працює галерея “У домі Івана Кавалерідзе”.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { desktop: image1, tablet: image1 },
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { desktop: image2, tablet: image2 },
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Він був філософом своєї творчості. Неймовірна різноманітність талантів Кавалерідзе — скульптора, кінорежисера, драматурга — свідчить про його талант та неймовірний рівень осмислення реальності.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Кавалерідзе створював “пластичні” фільми, образи яких можна описати як кутасті, кубічно-чіткі, або рвані та бурхливі. Його скульптури — глибокі та майстерні, з відчуттям авторської душі та “думки серцем”.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { desktop: image3, tablet: image3 },
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { desktop: image4, tablet: image4 },
      columns: 1,
    },
  ],
};
