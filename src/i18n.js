import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "home-hero-title": "ADDITIONAL TERAHASH <span>FOR YOUR DEVICES</span> FOREVER",
      "home-hero-description": "We accelerate your equipment gently and well and conserve energy",
      "home-hero-button": "Select equipment",
      "menu-item-home": "Home",
      "menu-item-resources": "Resources",
      "menu-item-faq": "FAQ"
    }
  },
  ru: {
    translation: {
      "home-hero-title": "Дополнительные терахеши <span>для вашего устройства</span навсегда",
      "home-hero-description": "Мы аккуратно и эффективно ускоряем ваше оборудование и экономим энергию.",
      "home-hero-button": "Выбрать устройство",
      "menu-item-home": "Главная",
      "menu-item-resources": "Ресурсы",
      "menu-item-faq": "Вопросы"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
