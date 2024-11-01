import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    theme: {
      light: {
        colors: {
          primary600: "orange",
          buttonPrimary500: "orange",
          buttonPrimary600: "orange",
        },
      },
      dark: {
        colors: {
          primary600: "orange",
          buttonPrimary500: "orange",
          buttonPrimary600: "orange",
        },
      },
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      "es",
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
