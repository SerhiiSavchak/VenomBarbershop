export type Lang = "uk" | "en";

export const STORAGE_KEY = "venom-lang";

export const defaultLang: Lang = "uk";

export type Messages = {
  meta: { title: string; description: string };
  brand: { wordmark: string };
  nav: Record<
    "about" | "process" | "services" | "space" | "gallery" | "reviews" | "contact",
    string
  >;
  header: {
    bookNow: string;
    bookAppointment: string;
    openMenu: string;
    closeMenu: string;
    closeMenuBackdrop: string;
    logoAria: string;
    langUk: string;
    langEn: string;
    langSwitcherAria: string;
    navPrimaryAria: string;
    navMobileAria: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    instagramAria: string;
    facebookAria: string;
    twitterAria: string;
    navAria: string;
  };
  footerNav: Record<"services" | "about" | "team" | "gallery" | "reviews" | "contact", string>;
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    primaryCtaAria: string;
    secondaryCtaAria: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { num: string; title: string; body: string }[];
    cta: string;
    ctaAria: string;
    collageLabel: string;
    imageMainAlt: string;
    imageSmallTopAlt: string;
    imageSmallBottomAlt: string;
  };
  services: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionLead: string;
    reserve: string;
    cardStandard: string;
    cardStandardSub: string;
    items: {
      name: string;
      tag: string;
      duration: string;
      blurb: string;
      price: string;
    }[];
  };
  space: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imageMain: string;
    imageChair: string;
    imageTools: string;
  };
  process: {
    eyebrow: string;
    title: string;
    imageAlt: string;
    steps: { number: string; title: string; desc: string }[];
  };
  masters: {
    eyebrow: string;
    title: string;
    instagramAria: string;
    items: { name: string; role: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    imageAlt: (n: number) => string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    featuredImageAlt: string;
    items: { name: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    bookAppointment: string;
    callNow: string;
    phoneHref: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    emailLabel: string;
    address: string;
    hours: string;
    phone: string;
    email: string;
    mapImageAlt: string;
    mapPlaceholder: string;
  };
};

export const messages: Record<Lang, Messages> = {
  uk: {
    meta: {
      title: "VENOM | Барбершоп у Львові",
      description:
        "Стрижка, борода та догляд у темній преміальній атмосфері. Онлайн-запис і зручний сервіс.",
    },
    brand: { wordmark: "VENOM" },
    nav: {
      about: "Про нас",
      process: "Процес",
      services: "Послуги",
      space: "Простір",
      gallery: "Галерея",
      reviews: "Відгуки",
      contact: "Контакти",
    },
    header: {
      bookNow: "Записатися зараз",
      bookAppointment: "Записатися",
      openMenu: "Відкрити меню",
      closeMenu: "Закрити меню",
      closeMenuBackdrop: "Закрити меню",
      logoAria: "VENOM — на початок сторінки",
      langUk: "UA",
      langEn: "EN",
      langSwitcherAria: "Мова сайту",
      navPrimaryAria: "Головна навігація",
      navMobileAria: "Мобільна навігація",
    },
    footer: {
      copyright: "Усі права захищені.",
      privacy: "Конфіденційність",
      terms: "Умови",
      instagramAria: "Instagram",
      facebookAria: "Facebook",
      twitterAria: "X (Twitter)",
      navAria: "Посилання в підвалі",
    },
    footerNav: {
      services: "Послуги",
      about: "Про нас",
      team: "Команда",
      gallery: "Галерея",
      reviews: "Відгуки",
      contact: "Контакти",
    },
    hero: {
      eyebrow: "БАРБЕРШОП У ЛЬВОВІ",
      headline1: "ТОЧНА СТРИЖКА.",
      headline2: "ЧИСТИЙ СТИЛЬ.",
      description:
        "Стрижки, борода та догляд у темній преміальній атмосфері. Підберемо форму, яка пасує саме тобі.",
      ctaPrimary: "ЗАПИСАТИСЯ",
      ctaSecondary: "ПЕРЕГЛЯНУТИ ПОСЛУГИ",
      stats: [
        { value: "15K+", label: "клієнтів" },
        { value: "8+", label: "років досвіду" },
        { value: "5K+", label: "стрижок" },
        { value: "24/7", label: "запис онлайн" },
      ],
      primaryCtaAria: "Записатися на візит",
      secondaryCtaAria: "Переглянути послуги",
    },
    about: {
      eyebrow: "ПРО НАС",
      title: "VENOM BARBERSHOP",
      subtitle:
        "Ми створюємо чоловічі стрижки, бороду та догляд у темній преміальній атмосфері. VENOM — це про точність, характер і впевненість у деталях.",
      points: [
        {
          num: "01",
          title: "Стрижки",
          body: "Підбираємо форму під риси обличчя, стиль і звичний ритм.",
        },
        {
          num: "02",
          title: "Борода",
          body: "Оформлюємо контур, довжину та чисту геометрію.",
        },
        {
          num: "03",
          title: "Атмосфера",
          body: "Темний простір, музика, крісло і спокійний сервіс без зайвого шуму.",
        },
      ],
      cta: "Переглянути процес",
      ctaAria: "Переглянути процес",
      collageLabel: "ЛЬВІВ",
      imageMainAlt: "Зал барбершопу",
      imageSmallTopAlt: "Крісло",
      imageSmallBottomAlt: "Деталі простору",
    },
    services: {
      sectionEyebrow: "НАШІ ПОСЛУГИ",
      sectionTitle: "Послуги",
      sectionLead: "Стрижка, борода та комплексний догляд — чітко, акуратно, без зайвого.",
      reserve: "Обрати послугу",
      cardStandard: "Стандарт VENOM",
      cardStandardSub: "Консультація включена · За потреби — гарячий рушник",
      items: [
        {
          name: "Стрижка",
          tag: "Хіт",
          duration: "45 хв",
          blurb: "Класична або сучасна стрижка під форму голови та твій стиль.",
          price: "$35",
        },
        {
          name: "Борода",
          tag: "Форма",
          duration: "30 хв",
          blurb: "Рівний контур, охайна довжина та охайний вигляд бороди.",
          price: "$28",
        },
        {
          name: "Стрижка + борода",
          tag: "Комплекс",
          duration: "60 хв",
          blurb: "Повний апдейт образу за один візит — зручно і послідовно.",
          price: "$55",
        },
        {
          name: "Гоління",
          tag: "Бритва",
          duration: "35 хв",
          blurb: "Гоління небезпечною бритвою з підготовкою шкіри та охайним фінішем.",
          price: "$30",
        },
        {
          name: "VIP-догляд",
          tag: "VIP",
          duration: "90 хв",
          blurb: "Розширений сервіс: стрижка, борода та додатковий догляд за запитом.",
          price: "$75",
        },
      ],
    },
    space: {
      eyebrow: "АТМОСФЕРА",
      title: "Простір",
      body:
        "Темний інтер’єр, комфортне крісло, сильна музика і спокійна впевненість у кожній деталі.",
      cta: "Записатися",
      imageMain: "Зал барбершопу",
      imageChair: "Крісло",
      imageTools: "Інструменти",
    },
    process: {
      eyebrow: "ЯК МИ ПРАЦЮЄМО",
      title: "Процес",
      imageAlt: "Барбер за роботою",
      steps: [
        {
          number: "01",
          title: "Консультація",
          desc: "Обговорюємо форму, стиль і побажання.",
        },
        {
          number: "02",
          title: "Стрижка",
          desc: "Працюємо з формою, довжиною та деталями.",
        },
        {
          number: "03",
          title: "Борода",
          desc: "Оформлюємо контур, якщо потрібно.",
        },
        {
          number: "04",
          title: "Фінал",
          desc: "Укладка, перевірка деталей і готовий образ.",
        },
      ],
    },
    masters: {
      eyebrow: "КОМАНДА",
      title: "Майстри",
      instagramAria: "Instagram майстра",
      items: [
        { name: "Marcus Stone", role: "Барбер" },
        { name: "David Chen", role: "Барбер" },
        { name: "James Williams", role: "Барбер" },
        { name: "Alex Rivera", role: "Барбер" },
      ],
    },
    gallery: {
      eyebrow: "РОБОТИ",
      title: "Галерея",
      imageAlt: (n) => `Фото роботи ${n}`,
    },
    reviews: {
      eyebrow: "ВІДГУКИ",
      title: "Що кажуть клієнти",
      featuredImageAlt: "Клієнт у барбершопі",
      items: [
        {
          name: "Олег К.",
          text: "Чиста робота, без поспіху. Форма тримається добре, повертаюсь регулярно.",
        },
        {
          name: "Андрій М.",
          text: "Зручний запис онлайн, приємна атмосфера. Бороду зробили рівно, як хотів.",
        },
        {
          name: "Роман Т.",
          text: "Нормальні ціни за якість. Майстер слухає і підказує, що реально підійде.",
        },
      ],
    },
    contact: {
      eyebrow: "ЗАПИС",
      title: "Готовий до нового стилю?",
      lead: "Обери онлайн-запис або зателефонуй — підкажемо час і послугу.",
      bookAppointment: "Записатися",
      callNow: "Подзвонити",
      phoneHref: "tel:+15551234567",
      addressLabel: "Адреса",
      hoursLabel: "Години",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      address: "123 Premium Street, Downtown District",
      hours: "Пн — Сб · 9:00 — 21:00\nНд · 10:00 — 18:00",
      phone: "+1 (555) 123-4567",
      email: "book@venombarbershop.com",
      mapImageAlt: "VENOM на карті",
      mapPlaceholder: "Точка на карті — підключити API",
    },
  },
  en: {
    meta: {
      title: "VENOM | Barbershop in Lviv",
      description:
        "Haircuts, beard work, and grooming in a dark premium atmosphere. Online booking.",
    },
    brand: { wordmark: "VENOM" },
    nav: {
      about: "About",
      process: "Process",
      services: "Services",
      space: "Space",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
    },
    header: {
      bookNow: "Book now",
      bookAppointment: "Book now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeMenuBackdrop: "Close menu backdrop",
      logoAria: "VENOM — back to top",
      langUk: "UA",
      langEn: "EN",
      langSwitcherAria: "Site language",
      navPrimaryAria: "Primary navigation",
      navMobileAria: "Mobile navigation",
    },
    footer: {
      copyright: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      instagramAria: "Instagram",
      facebookAria: "Facebook",
      twitterAria: "X (Twitter)",
      navAria: "Footer links",
    },
    footerNav: {
      services: "Services",
      about: "About",
      team: "Team",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      eyebrow: "BARBERSHOP IN LVIV",
      headline1: "PRECISE CUT.",
      headline2: "CLEAN STYLE.",
      description:
        "Haircuts, beard work, and grooming in a dark premium atmosphere. We shape a look that fits you.",
      ctaPrimary: "BOOK NOW",
      ctaSecondary: "VIEW SERVICES",
      stats: [
        { value: "15K+", label: "clients" },
        { value: "8+", label: "years experience" },
        { value: "5K+", label: "cuts" },
        { value: "24/7", label: "online booking" },
      ],
      primaryCtaAria: "Book a visit",
      secondaryCtaAria: "View services",
    },
    about: {
      eyebrow: "ABOUT",
      title: "VENOM BARBERSHOP",
      subtitle:
        "We craft men's haircuts, beard work, and grooming in a dark premium atmosphere. VENOM is precision, character, and confidence in the details.",
      points: [
        {
          num: "01",
          title: "Haircuts",
          body: "We shape the cut to your face, style, and everyday rhythm.",
        },
        {
          num: "02",
          title: "Beard",
          body: "Clean outline, controlled length, and sharp geometry.",
        },
        {
          num: "03",
          title: "Atmosphere",
          body: "A dark room, music, the chair, and calm service without noise.",
        },
      ],
      cta: "View the process",
      ctaAria: "View the process section",
      collageLabel: "LVIV",
      imageMainAlt: "Barbershop interior",
      imageSmallTopAlt: "Chair detail",
      imageSmallBottomAlt: "Space details",
    },
    services: {
      sectionEyebrow: "OUR SERVICES",
      sectionTitle: "Services",
      sectionLead:
        "Haircuts, beard work, and full grooming — clean, neat, no fluff.",
      reserve: "Choose service",
      cardStandard: "VENOM standard",
      cardStandardSub: "Consultation included · Hot towel on request",
      items: [
        {
          name: "Haircut",
          tag: "Popular",
          duration: "45 min",
          blurb: "Classic or modern cut tailored to your head shape and style.",
          price: "$35",
        },
        {
          name: "Beard",
          tag: "Shape",
          duration: "30 min",
          blurb: "Sharp lines, tidy length, and a neat beard finish.",
          price: "$28",
        },
        {
          name: "Haircut + beard",
          tag: "Combo",
          duration: "60 min",
          blurb: "Full refresh in one visit — efficient and consistent.",
          price: "$55",
        },
        {
          name: "Shave",
          tag: "Razor",
          duration: "35 min",
          blurb: "Straight-razor shave with skin prep and a smooth finish.",
          price: "$30",
        },
        {
          name: "VIP grooming",
          tag: "VIP",
          duration: "90 min",
          blurb: "Extended service: cut, beard, and extra care on request.",
          price: "$75",
        },
      ],
    },
    space: {
      eyebrow: "ATMOSPHERE",
      title: "Space",
      body:
        "Dark interior, a comfortable chair, strong music, and calm confidence in every detail.",
      cta: "Book now",
      imageMain: "Shop floor",
      imageChair: "Chair detail",
      imageTools: "Tools",
    },
    process: {
      eyebrow: "HOW WE WORK",
      title: "Process",
      imageAlt: "Barber at work",
      steps: [
        {
          number: "01",
          title: "Consultation",
          desc: "We discuss shape, style, and what you want.",
        },
        {
          number: "02",
          title: "Haircut",
          desc: "We work on shape, length, and details.",
        },
        {
          number: "03",
          title: "Beard",
          desc: "We clean up the outline when needed.",
        },
        {
          number: "04",
          title: "Finish",
          desc: "Styling, final check, and you’re ready.",
        },
      ],
    },
    masters: {
      eyebrow: "TEAM",
      title: "Masters",
      instagramAria: "Barber Instagram",
      items: [
        { name: "Marcus Stone", role: "Barber" },
        { name: "David Chen", role: "Barber" },
        { name: "James Williams", role: "Barber" },
        { name: "Alex Rivera", role: "Barber" },
      ],
    },
    gallery: {
      eyebrow: "WORK",
      title: "Gallery",
      imageAlt: (n) => `Gallery photo ${n}`,
    },
    reviews: {
      eyebrow: "REVIEWS",
      title: "What clients say",
      featuredImageAlt: "Client at the shop",
      items: [
        {
          name: "Michael R.",
          text: "Solid cut, no rush. The shape holds well — I keep coming back.",
        },
        {
          name: "David L.",
          text: "Easy online booking and a great vibe. Beard lines were exactly what I asked for.",
        },
        {
          name: "James T.",
          text: "Fair prices for the quality. The barber listens and suggests what actually fits.",
        },
      ],
    },
    contact: {
      eyebrow: "BOOKING",
      title: "Ready for a fresh look?",
      lead: "Book online or call — we’ll help with time and services.",
      bookAppointment: "Book now",
      callNow: "Call",
      phoneHref: "tel:+15551234567",
      addressLabel: "Address",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
      emailLabel: "Email",
      address: "123 Premium Street, Downtown District",
      hours: "Mon — Sat · 9:00 — 21:00\nSun · 10:00 — 18:00",
      phone: "+1 (555) 123-4567",
      email: "book@venombarbershop.com",
      mapImageAlt: "VENOM on the map",
      mapPlaceholder: "Map pin — integrate API",
    },
  },
};
