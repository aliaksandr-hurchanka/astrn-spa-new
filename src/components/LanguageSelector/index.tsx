import { SVGIcon } from "../../common/components/svg-icon";
import ArrowDownIcon from '../../assets/icons/arrow-down.svg';
import { LanguageSelectorStyled, LanguageListStyled, LanguageItemStyled, LangCodeStyled, LanguageMobileListStyled, LanguageMobileItemStyled, BackButtonStyled } from './styled';
import { useContext, useState } from "react";
import { getLanguages } from "./languages";
import { useTranslation } from "react-i18next";
import { find } from "lodash";
import { Language } from "./types";
import { EVENT_NAME_MAP } from "../../common/utils/constants";
import { useOutsideClick } from "../../common/hooks/useOutsideClick";
import { useWindowSize } from "../../common/hooks";
import { OptionsContext } from "../../common/contexts";

export function LanguageSelector() {
  
  const { i18n } = useTranslation();
  const defaultLanguage = find(getLanguages(), ['code', i18n.language]);  

  const { isLanguageMenuShowed, setIsLanguageMenuShowed } = useContext(OptionsContext);
  const [activeLanguage, setActiveLanguage] = useState<Language | undefined>(defaultLanguage);
  const { elementRef } = useOutsideClick({
    eventName: EVENT_NAME_MAP.click,
    callback: () => setIsLanguageMenuShowed(false),
    options: true
  });
  const { isMobileView, isTabletView, isMiddleDesktopView, isInfiniteDesktopView } = useWindowSize();

  const handleClick = (lng: Language) => {
    i18n.changeLanguage(lng.code);
    setActiveLanguage(lng);
    setIsLanguageMenuShowed(false);
  }

  return (
    <>
      {(isInfiniteDesktopView || isMiddleDesktopView || isTabletView || isMobileView)
      && !isLanguageMenuShowed
      ? (
        <LanguageSelectorStyled onClick={() => setIsLanguageMenuShowed(!isLanguageMenuShowed)}>
          <SVGIcon type={activeLanguage?.icon} sizes={{
            w: 20,
            h: 15
          }} />
          <LangCodeStyled>{activeLanguage?.code}</LangCodeStyled>
          <SVGIcon type={ArrowDownIcon} sizes={{
            w: 20,
            h: 15
          }} />
        </LanguageSelectorStyled>) : null}
      {isLanguageMenuShowed && (isInfiniteDesktopView || isMiddleDesktopView)
        && (
        // @ts-ignore
        <LanguageListStyled ref={elementRef}>{
          getLanguages().map((lng, i) => {
            return (
              <LanguageItemStyled key={`${lng}_${i}`} onClick={() => handleClick(lng)}>
                <SVGIcon type={lng.icon} sizes={{
                  w: 20,
                  h: 15
                }} />
                <span>{lng.name}</span>
              </LanguageItemStyled>

            );
          })}</LanguageListStyled>)}
      {isLanguageMenuShowed
        && (isTabletView || isMobileView)
        && (
        <>
          <LanguageMobileListStyled>{
            getLanguages().map((lng, i) => {
              return (
                <LanguageMobileItemStyled key={`${lng}_${i}`} onClick={() => handleClick(lng)}>
                  <SVGIcon type={lng.icon} sizes={{
                    w: 20,
                    h: 15
                  }} />
                  <span>{lng.name}</span>
                </LanguageMobileItemStyled>
              );
            })}</LanguageMobileListStyled>
          <BackButtonStyled onClick={() => setIsLanguageMenuShowed(false)}>
            Back
          </BackButtonStyled>
        </>
      )}
    </>
  );
}