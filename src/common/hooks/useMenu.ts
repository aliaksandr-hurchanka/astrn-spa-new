import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export const useMenu = () => {

  // const [isMenuShowed, setIsMenuShowed] = useState(false);
  const { isMobileView, isTabletView } = useWindowSize();
  const [isLanguageSelectorShowed, setIsLanguageSelectorShowed] = useState(false);

  return {
    // isMenuShowed,
    isLanguageSelectorShowed,
    // setIsMenuShowed,
    setIsLanguageSelectorShowed
  };
}