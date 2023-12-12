import { MobileMenuButtonStyled, MobileMenuStyled } from "./styled";
import HamburgerIcon from '../../../assets/icons/hamburger.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import { SVGIcon } from '../../../common/components/svg-icon';
import { useEffect, useState } from "react";
import { MenuList } from "../components/MenuList";

export function MobileMenu() {

  const [isMenuShowed, setIsMenuShowed] = useState(false);

  useEffect(() => {
    if (isMenuShowed) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      // if any scroll is attempted,
      // set this to the previous value

      document.body.style.overflow = 'hidden';

      window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);

      return;
    }

    window.onscroll = () => null;
    document.body.style.overflow = 'auto';
  }, [isMenuShowed]);

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
      </MobileMenuStyled>}
    </>
  );
}