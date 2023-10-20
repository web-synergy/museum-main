import { IPage } from '@/types';
import image1 from '@/assets/images/kavaleridze/artist1.jpg';
import image2 from '@/assets/images/kavaleridze/artist2.jpg';
import imageDesktop3 from '@/assets/images/kavaleridze/artistDesktop3.jpg';
import imageTablet3 from '@/assets/images/kavaleridze/artistTablet3.jpg';

export const artistData: IPage = {
  title: 'Митець',
  content: [
    {
      type: 'text',
      textContent:
        'Призначений злетіти вище: світогляд Івана Кавалерідзе та його головне покликання як митця полягало у замкненому колі відносин між творчою особистістю й тоталітарною системою. Іван Кавалерідзе мав довге й напрочуд плідне життя. Він був свідком та одним з творців доби великого соціального експерименту. За 70 років активної творчості він став автором близько 20 пам’ятників та сотні станкових робіт, зняв 10 кінофільмів, поставив 10 театральних п’єс.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Також написав книжку спогадів, до того ж залишилися ще й десятки нереалізованих проектів. Та митець був запрограмований природою на більше. Якби він, подібно до свого співучня й товариша Олександра Архипенка, переважну частину літ прожив за кордоном, то сягнув би, можливо, й вищих художніх злетів. Іван Кавалерідзе був людиною великого таланту та глибокої душі.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image1, desktop: image1 },
      imageLabel: 'Модель пам’ятника Тарасу Шевченку в Ромнах на Сумщині. Фото: Українська Вікіпедія',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image2, desktop: image2 },
      imageLabel: 'Пам’ятник Княгині Ользі (Київ). Фото: Українська Вікіпедія',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: imageTablet3, desktop: imageDesktop3 },
      imageLabel: 'Ярослав Мудрий. Золоті ворота. Фото: Український інтерес/Ростислав Мараєв',
      columns: 2,
    },
  ],
};
