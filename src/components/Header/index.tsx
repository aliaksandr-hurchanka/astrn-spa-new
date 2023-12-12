import { useTranslation } from 'react-i18next';
import { Col, Row } from '../../common/components/grid';

import { ColStyled, HeaderContainerStyled, HeaderStyled, MenuColStyled } from './styled';
import { Logo } from '../Logo';
import { Menu } from '../Menu/desktop';
import { ButtonStyled } from '../../common/components/button-styled';
import { useWindowSize } from '../../common/hooks';

import { MobileMenu } from '../Menu/mobile';

function Header() {

  const { i18n } = useTranslation();
  const { isInfiniteDesktopView, isMobileView, isTabletView } = useWindowSize();

  let countries = [
    {
      code: "en",
      name: "English",
      country_code: "en",
    },
    {
      code: "ru",
      name: "Русский",
      country_code: "ru",
    },
  ];

  return (
    <HeaderStyled>
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
            {/* {countries.map((lng, i) => {
              return (
                <ButtonStyled
                  key={`${lng}_${i}`}
                  type='small'
                  onClick={() => i18n.changeLanguage(lng.code)}
                  disabled={i18n.language === lng.code}
                >
                  <span>{lng.code}</span>
                </ButtonStyled>
              );
            })} */}
            {(isMobileView || isTabletView) && <MobileMenu />}
          </ColStyled>
        </Row>
      </HeaderContainerStyled>
    </HeaderStyled>
  );
}

export default Header;

Header.displayName = 'Header';
