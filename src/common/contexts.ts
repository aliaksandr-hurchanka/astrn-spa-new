import { createContext } from 'react';

export const OptionsContext = createContext({
  isMenuShowed: false,
  setIsMenuShowed: (isShowed: boolean) => isShowed,
  isLanguageMenuShowed: false,
  setIsLanguageMenuShowed: (isShowed: boolean) => isShowed,
  currentLanguage: {},
  // eslint-disable-next-line no-empty-pattern
  setCurrentLanguage: ({}) => {}
});
