import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import common_en from './en/common.json';
import common_th from './th/common.json';
import common_dk from './dk/common.json';
import common_vi from './vi/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        title: 'English',
        common: common_en,
      },
      dk: {
        title: 'Denmark',
        common: common_dk,
      },
      vi: {
        title: 'Tiếng Việt',
        common: common_vi,
      },
      th: {
        title: 'ThaiLand',
        common: common_th,
      },

      // uk: {
      //   title: "Ukraine",
      //   common: common_uk,
      // },
      // es: {
      //   title: "Spain",
      //   common: common_es,
      // },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
