import {
  SITE_ADDRESS_EN,
  SITE_ADDRESS_UK,
  SITE_GOOGLE_MAPS_OPEN_URL,
  SITE_HOURS_EN,
  SITE_HOURS_UK,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  siteGoogleMapsEmbedSrc,
} from "./site-contact";

export type Lang = "uk" | "en";

export const STORAGE_KEY = "venom-lang";

export const defaultLang: Lang = "uk";

/** Hero strip: animated numeric stats or fixed text (e.g. 24/7). */
export type HeroStat =
  | { mode: "count"; end: number; suffix: string; label: string }
  | { mode: "text"; value: string; label: string };

export type Messages = {
  meta: { title: string; description: string };
  brand: { wordmark: string };
  nav: Record<
    "about" | "process" | "services" | "space" | "gallery" | "reviews" | "contact",
    string
  >;
  header: {
    bookNow: string;
    bookNowShort: string;
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
    /** Коротший підпис для вузьких екранів (герой, другорядна CTA). */
    ctaSecondaryShort: string;
    stats: HeroStat[];
    primaryCtaAria: string;
    secondaryCtaAria: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { num: string; title: string; body: string }[];
    cta: string;
    ctaShort: string;
    ctaAria: string;
    collageLabel: string;
    imageMainAlt: string;
    imageSmallTopAlt: string;
    imageSmallBottomAlt: string;
    imageFeatureAlt: string;
  };
  services: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionLead: string;
    priceNote: string;
    detailsCta: string;
    reserveCta: string;
    reserve: string;
    modalClose: string;
    categories: {
      id: "haircuts" | "beard" | "combo" | "toning" | "care" | "hairTattoo";
      name: string;
      blurb: string;
      priceRange: string;
      imageAlt: string;
      items: {
        name: string;
        duration: string;
        price: string;
        blurb?: string;
      }[];
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
    ctaLead: string;
    bookCtaAria: string;
    items: { name: string; role: string; imageAlt: string }[];
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
    /** Повний `src` для iframe з Google Maps (Код вставки → HTML) або query-embed на координати. */
    googleMapsEmbedSrc: string;
    /** Посилання «Відкрити в Google Картах» (той самий пункт на карті). */
    googleMapsOpenUrl: string;
    mapIframeTitle: string;
    openInGoogleMaps: string;
  };
};

export const messages: Record<Lang, Messages> = {
  uk: {
    meta: {
      title: "VENOM | Барбершоп у Львові",
      description:
        "Стрижка, борода та догляд у Львові. Онлайн-запис, зручний сервіс і команда, яка чітко формує образ.",
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
      bookNowShort: "Записатися",
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
      instagramAria: "Instagram VENOM",
      facebookAria: "Facebook VENOM",
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
        "Стрижки, борода та догляд без зайвого шуму. Підберемо форму й ритуал, які реально пасують тобі.",
      ctaPrimary: "ЗАПИСАТИСЯ",
      ctaSecondary: "ПЕРЕГЛЯНУТИ ПОСЛУГИ",
      ctaSecondaryShort: "ПОСЛУГИ",
      stats: [
        { mode: "count", end: 1000, suffix: "+", label: "клієнтів" },
        { mode: "count", end: 8, suffix: "+", label: "років досвіду" },
        { mode: "count", end: 2500, suffix: "+", label: "стрижок" },
        { mode: "text", value: "24/7", label: "запис онлайн" },
      ],
      primaryCtaAria: "Записатися на візит",
      secondaryCtaAria: "Переглянути послуги",
    },
    about: {
      eyebrow: "ПРО НАС",
      title: "МІСЦЕ ДЛЯ ОБРАЗУ",
      subtitle:
        "VENOM у Львові — про рішення, а не галас: форма, ритм і догляд там, де це реально має сенс для тебе. Без шаблонних «історій бренду» — лише зрозумілий сервіс і охайний результат.",
      points: [
        {
          num: "01",
          title: "Простір",
          body: "Затишний зал і спокійний темп: час тільки для тебе й майстра, без зайвого шуму в навушниках чи в телефоні.",
        },
        {
          num: "02",
          title: "Пояснення",
          body: "Показуємо логіку кроків і варіанти — ти розумієш, що відбувається, а не просто «довіряй».",
        },
        {
          num: "03",
          title: "Результат",
          body: "Чисті лінії й охайний вигляд, який легко підтримувати між візитами — без надмірного стайлінгу на камеру.",
        },
      ],
      cta: "Переглянути процес",
      ctaShort: "Процес",
      ctaAria: "Переглянути процес",
      collageLabel: "ЛЬВІВ",
      imageMainAlt: "Зал барбершопу",
      imageSmallTopAlt: "Крісло та робоче місце",
      imageSmallBottomAlt: "Деталі інтер'єру",
      imageFeatureAlt: "Панорама залу",
    },
    services: {
      sectionEyebrow: "НАШІ ПОСЛУГИ",
      sectionTitle: "Послуги",
      sectionLead: "Стрижка, борода та комплексний догляд — чітко, акуратно, без зайвого.",
      priceNote: "Ціна залежить від категорії майстра.",
      detailsCta: "Детальніше",
      reserveCta: "Записатися",
      reserve: "Записатися онлайн",
      modalClose: "Закрити",
      categories: [
        {
          id: "haircuts",
          name: "Чоловічі стрижки",
          blurb: "Класика, фейд чи кроп — під форму голови та твій стиль.",
          priceRange: "від 500 до 1 300 ₴",
          imageAlt: "Барбер під час чоловічої стрижки",
          items: [
            {
              name: "Стрижка машинкою",
              duration: "30 хв",
              price: "500–700 ₴",
              blurb: "Акуратна стрижка з чітким контуром.",
            },
            {
              name: "Стрижка ножицями",
              duration: "45 хв",
              price: "800–1 000 ₴",
              blurb: "Точна робота з довжиною та текстурою.",
            },
            {
              name: "Фейд / кроп",
              duration: "45 хв",
              price: "900–1 100 ₴",
              blurb: "Плавні переходи та сучасна геометрія.",
            },
            {
              name: "Стрижка + укладка",
              duration: "50 хв",
              price: "1 000–1 300 ₴",
              blurb: "Фінішна укладка після стрижки.",
            },
          ],
        },
        {
          id: "beard",
          name: "Борода та гоління",
          blurb: "Контур, довжина та гоління — охайно й без зайвого.",
          priceRange: "від 700 до 1 100 ₴",
          imageAlt: "Моделювання бороди в барбершопі",
          items: [
            {
              name: "Моделювання бороди",
              duration: "30 хв",
              price: "700–900 ₴",
              blurb: "Форма, симетрія та акуратний контур.",
            },
            {
              name: "Корекція бороди",
              duration: "25 хв",
              price: "700–850 ₴",
              blurb: "Підтримка довжини та ліній.",
            },
            {
              name: "Гоління небезпечною бритвою",
              duration: "35 хв",
              price: "900–1 100 ₴",
              blurb: "Підготовка шкіри та гладкий фініш.",
            },
            {
              name: "Борода + гоління шиї",
              duration: "40 хв",
              price: "950–1 100 ₴",
              blurb: "Повний догляд зони бороди та шиї.",
            },
          ],
        },
        {
          id: "combo",
          name: "Комбо",
          blurb: "Повний апдейт образу за один візит — зручно і послідовно.",
          priceRange: "від 1 550 до 2 200 ₴",
          imageAlt: "Комплексний барберський сервіс",
          items: [
            {
              name: "Стрижка + борода",
              duration: "60 хв",
              price: "1 550–1 800 ₴",
              blurb: "Голова та борода в одному ритмі.",
            },
            {
              name: "Стрижка + гоління",
              duration: "65 хв",
              price: "1 650–1 900 ₴",
              blurb: "Стрижка з класичним голінням.",
            },
            {
              name: "Повний догляд",
              duration: "75 хв",
              price: "1 900–2 200 ₴",
              blurb: "Стрижка, борода та фінішний догляд.",
            },
          ],
        },
        {
          id: "toning",
          name: "Тонування",
          blurb: "Рівний відтінок волосся чи бороди без різких переходів.",
          priceRange: "від 600 до 750 ₴",
          imageAlt: "Тонування волосся в барбершопі",
          items: [
            {
              name: "Тонування волосся",
              duration: "30 хв",
              price: "600–700 ₴",
              blurb: "Освіження кольору та глибини відтінку.",
            },
            {
              name: "Тонування бороди",
              duration: "25 хв",
              price: "650–750 ₴",
              blurb: "Рівномірний тон бороди під загальний образ.",
            },
          ],
        },
        {
          id: "care",
          name: "Догляд",
          blurb: "Укладка, корекція та фінішні штрихи після основної роботи.",
          priceRange: "від 250 до 350 ₴",
          imageAlt: "Фінішний догляд та укладка",
          items: [
            {
              name: "Укладка",
              duration: "15 хв",
              price: "250–300 ₴",
              blurb: "Фіксація форми після стрижки.",
            },
            {
              name: "Воскова корекція",
              duration: "20 хв",
              price: "300–350 ₴",
              blurb: "Точне прибирання зайвих волосків.",
            },
            {
              name: "Догляд за волоссям",
              duration: "25 хв",
              price: "300–350 ₴",
              blurb: "Живлення та фініш після основної послуги.",
            },
          ],
        },
        {
          id: "hairTattoo",
          name: "Хеір тату",
          blurb: "Декоративний патерн машинкою — акуратний акцент у стрижці.",
          priceRange: "300 ₴",
          imageAlt: "Хеір тату машинкою",
          items: [
            {
              name: "Хеір тату (патерн)",
              duration: "20 хв",
              price: "300 ₴",
              blurb: "Геометричний або текстурний малюнок на волосся.",
            },
          ],
        },
      ],
    },
    space: {
      eyebrow: "ІНТЕР’ЄР",
      title: "Простір",
      body:
        "Світлий охайний зал, зручне крісло, добра музика й увага до деталей — щоб тобі було легко розслабитись і зосередитись на результаті.",
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
          desc: "Форма, стиль і побажання — узгоджуємо очікування до першого руху ножиць.",
        },
        {
          number: "02",
          title: "Робота з формою",
          desc: "Довжина, текстура й перехід між зонами — акуратно й послідовно.",
        },
        {
          number: "03",
          title: "Акценти",
          desc: "Додаткові зони лише там, де це доречно: контур, текстура чи легкий догляд — за домовленістю.",
        },
        {
          number: "04",
          title: "Фініш",
          desc: "Укладка за потреби, перевірка в дзеркалі — і ти виходиш з уже «своїм» виглядом.",
        },
      ],
    },
    masters: {
      eyebrow: "КОМАНДА",
      title: "Майстри",
      ctaLead:
        "Хочеш до конкретного майстра? Запишись онлайн — підберемо час і послугу під твій графік.",
      bookCtaAria: "Записатися в барбершоп",
      items: [
        { name: "Мирослав", role: "Експерт-власник", imageAlt: "Мирослав — експерт-власник" },
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
      phoneHref: SITE_PHONE_HREF,
      addressLabel: "Адреса",
      hoursLabel: "Години",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      address: SITE_ADDRESS_UK,
      hours: SITE_HOURS_UK,
      phone: SITE_PHONE_DISPLAY,
      email: "book@venombarbershop.com",
      googleMapsEmbedSrc: siteGoogleMapsEmbedSrc("uk"),
      googleMapsOpenUrl: SITE_GOOGLE_MAPS_OPEN_URL,
      mapIframeTitle: "Google Карта — VENOM Barbershop, Сокільники, Львів",
      openInGoogleMaps: "Відкрити в Google Картах",
    },
  },
  en: {
    meta: {
      title: "VENOM | Barbershop in Lviv",
      description:
        "Haircuts, beard work, and grooming in Lviv. Online booking and a team that shapes your look with precision.",
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
      bookNowShort: "Book",
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
      instagramAria: "Instagram VENOM",
      facebookAria: "Facebook VENOM",
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
        "Haircuts, beard work, and grooming without the noise. We shape a look and routine that actually fit you.",
      ctaPrimary: "BOOK NOW",
      ctaSecondary: "VIEW SERVICES",
      ctaSecondaryShort: "SERVICES",
      stats: [
        { mode: "count", end: 1000, suffix: "+", label: "clients" },
        { mode: "count", end: 8, suffix: "+", label: "years experience" },
        { mode: "count", end: 2500, suffix: "+", label: "cuts" },
        { mode: "text", value: "24/7", label: "online booking" },
      ],
      primaryCtaAria: "Book a visit",
      secondaryCtaAria: "View services",
    },
    about: {
      eyebrow: "ABOUT",
      title: "ROOM FOR YOUR LOOK",
      subtitle:
        "VENOM in Lviv is about choices, not noise — shape, rhythm, and care where it actually fits you. No brand monologues: just clear service and a clean finish.",
      points: [
        {
          num: "01",
          title: "The room",
          body: "A calm, easy pace — time for you and the barber only, without extra noise in your ears or on your screen.",
        },
        {
          num: "02",
          title: "The why",
          body: "We walk through the steps and options so you understand what’s happening — not just “trust me.”",
        },
        {
          num: "03",
          title: "The outcome",
          body: "Crisp lines and a tidy look that’s easy to live with between visits — not over-styled for a photo.",
        },
      ],
      cta: "View the process",
      ctaShort: "Process",
      ctaAria: "View the process section",
      collageLabel: "LVIV",
      imageMainAlt: "Barbershop floor",
      imageSmallTopAlt: "Chair and station",
      imageSmallBottomAlt: "Interior details",
      imageFeatureAlt: "Wide view of the shop",
    },
    services: {
      sectionEyebrow: "OUR SERVICES",
      sectionTitle: "Services",
      sectionLead:
        "Haircuts, beard work, and full grooming — clean, neat, no fluff.",
      priceNote: "Price depends on the barber tier.",
      detailsCta: "Details",
      reserveCta: "Book now",
      reserve: "Book online",
      modalClose: "Close",
      categories: [
        {
          id: "haircuts",
          name: "Men's haircuts",
          blurb: "Classic, fade, or crop — shaped to your head and style.",
          priceRange: "from 500 to 1 300 ₴",
          imageAlt: "Barber giving a men's haircut",
          items: [
            {
              name: "Clipper cut",
              duration: "30 min",
              price: "500–700 ₴",
              blurb: "Clean cut with a sharp outline.",
            },
            {
              name: "Scissor cut",
              duration: "45 min",
              price: "800–1 000 ₴",
              blurb: "Precise length and texture work.",
            },
            {
              name: "Fade / crop",
              duration: "45 min",
              price: "900–1 100 ₴",
              blurb: "Smooth transitions and modern geometry.",
            },
            {
              name: "Cut + styling",
              duration: "50 min",
              price: "1 000–1 300 ₴",
              blurb: "Finished styling after the cut.",
            },
          ],
        },
        {
          id: "beard",
          name: "Beard & shave",
          blurb: "Lines, length, and shave — neat and to the point.",
          priceRange: "from 700 to 1 100 ₴",
          imageAlt: "Beard shaping at the barbershop",
          items: [
            {
              name: "Beard sculpting",
              duration: "30 min",
              price: "700–900 ₴",
              blurb: "Shape, symmetry, and clean lines.",
            },
            {
              name: "Beard trim",
              duration: "25 min",
              price: "700–850 ₴",
              blurb: "Length and line maintenance.",
            },
            {
              name: "Straight-razor shave",
              duration: "35 min",
              price: "900–1 100 ₴",
              blurb: "Skin prep and a smooth finish.",
            },
            {
              name: "Beard + neck shave",
              duration: "40 min",
              price: "950–1 100 ₴",
              blurb: "Full beard and neck area care.",
            },
          ],
        },
        {
          id: "combo",
          name: "Combo",
          blurb: "Full refresh in one visit — efficient and consistent.",
          priceRange: "from 1 550 to 2 200 ₴",
          imageAlt: "Full barber grooming service",
          items: [
            {
              name: "Haircut + beard",
              duration: "60 min",
              price: "1 550–1 800 ₴",
              blurb: "Head and beard in one rhythm.",
            },
            {
              name: "Haircut + shave",
              duration: "65 min",
              price: "1 650–1 900 ₴",
              blurb: "Cut paired with a classic shave.",
            },
            {
              name: "Full grooming",
              duration: "75 min",
              price: "1 900–2 200 ₴",
              blurb: "Cut, beard, and finishing care.",
            },
          ],
        },
        {
          id: "toning",
          name: "Toning",
          blurb: "Even tone for hair or beard without harsh transitions.",
          priceRange: "from 600 to 750 ₴",
          imageAlt: "Hair toning at the barbershop",
          items: [
            {
              name: "Hair toning",
              duration: "30 min",
              price: "600–700 ₴",
              blurb: "Refreshed color depth and tone.",
            },
            {
              name: "Beard toning",
              duration: "25 min",
              price: "650–750 ₴",
              blurb: "Even beard tone for the full look.",
            },
          ],
        },
        {
          id: "care",
          name: "Care",
          blurb: "Styling, corrections, and finishing touches after the main service.",
          priceRange: "from 250 to 350 ₴",
          imageAlt: "Finishing care and styling",
          items: [
            {
              name: "Styling",
              duration: "15 min",
              price: "250–300 ₴",
              blurb: "Shape hold after the cut.",
            },
            {
              name: "Wax correction",
              duration: "20 min",
              price: "300–350 ₴",
              blurb: "Precise removal of stray hairs.",
            },
            {
              name: "Hair treatment",
              duration: "25 min",
              price: "300–350 ₴",
              blurb: "Nourish and finish after the main service.",
            },
          ],
        },
        {
          id: "hairTattoo",
          name: "Hair tattoo",
          blurb: "Decorative clipper pattern — a clean accent in the cut.",
          priceRange: "300 ₴",
          imageAlt: "Hair tattoo with clippers",
          items: [
            {
              name: "Hair tattoo (pattern)",
              duration: "20 min",
              price: "300 ₴",
              blurb: "Geometric or textured design in the hair.",
            },
          ],
        },
      ],
    },
    space: {
      eyebrow: "INTERIOR",
      title: "Space",
      body:
        "Bright, clean interiors, a comfortable chair, good music, and steady attention to detail — so you can relax and focus on the result.",
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
          desc: "Shape, style, and expectations — aligned before the first snip.",
        },
        {
          number: "02",
          title: "Shaping",
          desc: "Length, texture, and clean transitions between areas — steady and precise.",
        },
        {
          number: "03",
          title: "Refinements",
          desc: "Extra attention only where it makes sense: outline, texture, or light grooming — as agreed.",
        },
        {
          number: "04",
          title: "Finish",
          desc: "Styling if needed, mirror check — you leave looking like yourself, dialed in.",
        },
      ],
    },
    masters: {
      eyebrow: "TEAM",
      title: "Masters",
      ctaLead:
        "Want a specific barber? Book online — we’ll align the time and service with your schedule.",
      bookCtaAria: "Book an appointment at the shop",
      items: [
        { name: "Myroslav", role: "Expert-owner", imageAlt: "Myroslav — expert-owner" },
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
      phoneHref: SITE_PHONE_HREF,
      addressLabel: "Address",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
      emailLabel: "Email",
      address: SITE_ADDRESS_EN,
      hours: SITE_HOURS_EN,
      phone: SITE_PHONE_DISPLAY,
      email: "book@venombarbershop.com",
      googleMapsEmbedSrc: siteGoogleMapsEmbedSrc("en"),
      googleMapsOpenUrl: SITE_GOOGLE_MAPS_OPEN_URL,
      mapIframeTitle: "Google Map — VENOM Barbershop, Sokilnyky, Lviv",
      openInGoogleMaps: "Open in Google Maps",
    },
  },
};
