import { IPage } from '@/types';
import imageDesktop1 from '@/assets/images/kavaleridze/kiyvDesktop1.jpg';
import imageTablet1 from '@/assets/images/kavaleridze/kiyvTablet1.jpg';
import image2 from '@/assets/images/kavaleridze/kiyv2.jpg';
import image3 from '@/assets/images/kavaleridze/kiyv3.jpg';

export const kyivData: IPage = {
  title: 'Митець і Київ',
  content: [
    {
      type: 'text',
      textContent:
        'Іван Кавалерідзе жив виключно мистецтвом. Невтомно шукав досконалість і радів кожному новому дню. “Найщасливіший день сьогодні, — писав він у щоденнику в 1977-му. — Чому? Бо він є і я живу!”. Майже все своє життя працював у місті Київ. Саме в Києві починав він свій шлях як скульптор та кінорежисер. Не покинув Києва навіть за часів німецької окупації. Деякий час очолював відділ культури Київської міської управи. Це давало змогу рятувати ув’язнених у Сирецькому концтаборі митців, надати притулок єврейським сім’ям у селах Київської області.',
      columns: 1,
    },
    {
      type: 'text',
      textContent:
        'Також рятувати молодь від вивезення до Німеччини, підтримати київську інтелігенцію, зберегти від пограбування культурні цінності. На будинку в Києві по вулиці Великій Васильківській, 16, де з 1954 по 1978 рік проживав митець, встановлено меморіальну дошку. Через 10 років після смерті Івана Кавалерідзе у Києві вийшов однойменний збірник статей і спогадів під назвою “Тіні швидкоплинних літ”. Там Іван Петрович розповів про життя, сповна віддане мистецтву.',
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: imageTablet1, desktop: imageDesktop1 },
      columns: 2,
    },
    {
      type: 'image',
      imageLink: { tablet: image2, desktop: image2 },
      columns: 1,
    },
    {
      type: 'image',
      imageLink: { tablet: image3, desktop: image3 },
      columns: 1,
    },
  ],
};
