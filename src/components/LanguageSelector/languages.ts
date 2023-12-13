import gbIcon from '../../assets/icons/flags/gb.svg';
import ruIcon from '../../assets/icons/flags/ru.svg';
import { Language } from './types';

export function getLanguages(): Language[] {
  const countries = [
    {
      code: "en",
      name: "English",
      country_code: "en",
      icon: gbIcon
    },
    {
      code: "ru",
      name: "Русский",
      country_code: "ru",
      icon: ruIcon
    },
  ];

  return countries;
}