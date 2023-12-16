import { Col, Row } from '../../common/components/grid';

import { ColStyled, HeaderContainerStyled, HeaderStyled, MenuColStyled } from './styled';
import { Logo } from '../Logo';
import { Menu } from '../Menu/desktop';
import { useWindowSize } from '../../common/hooks';

import { MobileMenu } from '../Menu/mobile';
import { LanguageSelector } from '../LanguageSelector';
import { OptionsContext } from '../../common/contexts';
import { useContext } from 'react';


function Header() {
  const { isInfiniteDesktopView, isMobileView, isTabletView } = useWindowSize();
  const { isMenuShowed } = useContext(OptionsContext);

  return (
    <HeaderStyled isMenuShowed={isMenuShowed}>
      <HeaderContainerStyled width='100%'>
        <Row height='80px' alignItems='center'>
          <Col sm={2} md={4} lg={3}>
            <Logo />
          </Col>
          {isInfiniteDesktopView && (
            <MenuColStyled lg={6}>
              <Menu />
            </MenuColStyled>
          )}
          <ColStyled sm={2} md={4} lg={3}>
            {isInfiniteDesktopView && <LanguageSelector />}
            {(isMobileView || isTabletView) && <MobileMenu />}
          </ColStyled>
        </Row>
      </HeaderContainerStyled>
    </HeaderStyled>
  );
}

export default Header;

Header.displayName = 'Header';
