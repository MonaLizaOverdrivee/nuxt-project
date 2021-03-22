export default [
  {
    name: 'Об университете',
    url: '/sveden',
    bg: 'rgb(0, 106, 158)',
    subMenuList: [
      {
        name: 'Сведения об образовательной организации',
        url: '',
      },
      {
        name: 'Миссия',
        url: '',
      },
      {
        name: 'Ученый совет',
        url: '',
      },
      {
        name: 'Стратегический план развития университета',
        url: '',
      },
      {
        name: 'Архив новостей',
        url: '',
      },
      {
        name: 'История',
        url: '',
      },
      {
        name: 'Телефонный справочник',
        url: '',
      },
      {
        name: 'Политика в области качества',
        url: '',
      },
    ],
    subMenuBtn: [
      {
        title: 'Обратиться к ректору',
        url: '',
        icon: 'mail-bulk',
      },
      {
        title: 'Информационный портал Университета',
        url: '',
        icon: 'info-circle',
      },
      {
        title: 'Электронный деканат',
        url: '',
        icon: 'database',
      },
    ],
  },
  {
    name: 'Образование',
    bg: 'rgb(0, 65, 98)',
    url: '/education',
    subMenuList: [
      {
        name: 'Профессионально-общественная аккредитация',
        url: '',
      },
      {
        name: 'Дополнительное профессиональное образование',
        url: '',
      },
      {
        name: 'Образовательный портал',
        url: '',
      },
      {
        name: 'Профессиональная переподготовка',
        url: '',
      },
      {
        name: 'Наши специальности',
        url: '',
      },
      {
        name: 'Юридическая клиника',
        url: '',
      },
      {
        name: 'Библиотека',
        url: '',
      },
      {
        name: 'Центр дистанционной профессионально переподготовки',
        url: '',
      },
    ],
    subMenuBtn: [
      {
        title: 'Факультеты',
        url: '',
        icon: 'university',
      },
      {
        title: 'Магистратура',
        url: '',
        icon: 'book-reader',
      },
      {
        title: 'Абитуриентам',
        url: '',
        icon: 'user-friends',
      },
      {
        title: 'Студентам',
        url: '',
        icon: 'user-graduate',
      },
      {
        title: 'Выпускникам',
        url: '',
        icon: 'award',
      },
      {
        title: 'Преподавателям и сотрудникам',
        url: '',
        icon: 'user-tie',
      },
    ],
  },
  {
    name: 'Международная деятельность',
    url: '/international_action',
    bg: 'rgb(115, 181, 215)',
    subMenuList: [],
    subMenuBtn: [
      {
        title: 'Студентам ГМУ',
        url: '/sad',
        icon: 'user-graduate',
      },
      {
        title: 'Сотрудникам ГМУ',
        url: '',
        icon: 'user-tie',
      },
      {
        title: 'Международное сотрудничество',
        url: '',
        icon: 'globe',
      },
      {
        title: 'Иностранным студентам',
        url: '',
        icon: 'passport',
      },
      {
        title: 'Международные проекты',
        url: '',
        icon: 'users',
      },
      // icon: ['user-graduate', 'user-tie', 'globe', 'passport', 'users'],
    ],
  },
  {
    name: 'Наука',
    url: '/science',
    bg: 'rgb(62, 42, 140)',
    subMenuList: [
      {
        name: 'Научно-исследовательская деятельность',
        url: '',
      },
      {
        name: 'Результаты научной деятельности',
        url: '',
      },
      {
        name: 'Научные направления',
        url: '',
      },
      {
        name: 'Авторам публикаций',
        url: '',
      },
      {
        name: 'Конфернеции, конкурсы, гранты',
        url: '',
      },
      {
        name: 'Научные исследования и разработки',
        url: '',
      },
      {
        name: 'Патентное обеспечение',
        url: '',
      },
    ],
    subMenuBtn: [
      {
        title: 'Аспирантура',
        url: '',
        icon: 'atom',
      },
      {
        title: 'Диссертационный совет',
        url: '',
        icon: 'chalkboard-teacher',
      },
      {
        title: 'Журналы университета',
        url: '',
        icon: 'newspaper',
      },
    ],
  },
  {
    name: 'Культура и спорт',
    url: '/culture_sport',
    bg: 'rgb(91, 112, 131)',
    subMenuList: [],
    subMenuBtn: {},
  },
  {
    name: 'Контакты',
    url: '/contacts',
    bg: 'rgb(41, 38, 54)',
    subMenuList: [],
    subMenuBtn: [
      {
        title: 'Адрес',
        data: ['353918', 'г. Новороссийск, пр-т Ленина,93'],
      },
      {
        title: 'Приемная руководителя',
        data: ['8 (8617) 76-78-00', '8 (8617) 71-75-25', 'mail@nsma.ru'],
      },
      {
        title: 'Приемная комиссия',
        data: ['8 (8617) 76-78-10 ', '71-63-03', 'pcom@nsma.ru'],
      },
      {
        title: 'Морской колледж',
        data: ['8 988 7692275', '8 918 3881399'],
      },
      {
        title: 'Транспортный колледж',
        data: [
          '8 (9887) 65-30-55',
          'http://t-college.ru/',
          'dekanat.tk@mail.ru',
        ],
      },
      {
        title: 'ИМТМЭиП',
        data: ['8 (8617) 76-78-45', '8 (8617) 76-79-45'],
      },
      {
        title: 'Деканат ФЭВТиС',
        data: ['8 (8617) 76-78-25'],
      },
      {
        title: 'Деканат СМФ',
        data: ['8 (8617) 76-78-87'],
      },
      {
        title: 'Заочный факультет',
        data: ['8 (8617) 76-78-54', 'zf@nsma.ru'],
      },
      {
        title: 'Институт повышения квалификации',
        data: ['8 (8617) 76-79-00', '8 (8617) 71-64-04', 'ipk.aumsu.ru'],
      },
    ],
  },
]
