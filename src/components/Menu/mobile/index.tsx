import { LanguageSelectorStyled, MobileMenuButtonStyled, MobileMenuStyled } from "./styled";
import HamburgerIcon from '../../../assets/icons/hamburger.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import { SVGIcon } from '../../../common/components/svg-icon';
import { MenuList } from "../components/MenuList";
import { LanguageSelector } from "../../LanguageSelector";
import { useContext, useEffect } from "react";
import { OptionsContext } from "../../../common/contexts";
import { useWindowSize } from "../../../common/hooks";

export function MobileMenu() {

  const { isMobileView, isTabletView } = useWindowSize();
  const { isMenuShowed, setIsMenuShowed } = useContext(OptionsContext);

  useEffect(() => {
    if ((isMobileView || isTabletView) && (isMenuShowed)) {
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      // if any scroll is attempted,
      // set this to the previous value

      document.body.style.overflow = 'hidden';

      window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
      console.log('Done');
      

      return;
    }

    window.onscroll = () => null;
    document.body.style.overflow = 'auto';
  }, [isMenuShowed, isMobileView, isTabletView]);

  return (
    <>
      <MobileMenuButtonStyled onClick={() => setIsMenuShowed(!isMenuShowed)}>
        <SVGIcon sizes={{
          w: 24,
          h: 24
        }} type={isMenuShowed ? CloseIcon : HamburgerIcon} />
      </MobileMenuButtonStyled>
      {isMenuShowed && <MobileMenuStyled>
        <MenuList closeMenuCb={setIsMenuShowed} />
        <LanguageSelectorStyled>
          <LanguageSelector />
        </LanguageSelectorStyled>
      </MobileMenuStyled>}
    </>
  );
}