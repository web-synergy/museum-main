const siteData = {
  general: {
    workingHours: 'Вт-Нд 11:00 – 18:00',
    location: 'Андріївський узвіз, 21, Київ',
    mainTitle: `Музей-майстерня
Івана Кавалерідзе`,
  },
  buttonsLabels: {
    tickets: 'Квитки',
    support: 'Підтримати музей',
    share: 'Поділитись сайтом',
    more: 'Читати більше',
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
