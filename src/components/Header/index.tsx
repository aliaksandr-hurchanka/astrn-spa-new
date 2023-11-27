import React from 'react';
import Logo from '../../assets/logo.svg';
import AsteronLogo from '../../assets/asteron.svg';
// import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from '../../common/components/grid';

import { AsteronIconStyled, ButtonStyled, MenuItemStyled, LogoIconStyled, LogoStyled, MenuCategoriesStyled, Message24Outline, Navigation1Styled, Text1Styled, HeaderContainerStyled } from './styled';
import { HeaderStyled } from '../HeroSection/styled';

function Header() {

  const isActiveLink = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#FFB22E' : '#ffffff',
  });

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

  const { t, i18n } = useTranslation();

  return (

      <HeaderContainerStyled height="80px">
        <Row>
          <Col lg={3}>
            <LogoStyled>
              <LogoIconStyled alt="" src={Logo} />
              <AsteronIconStyled alt="" src={AsteronLogo} />
            </LogoStyled>
          </Col>
          <Col lg={6}>
            <MenuCategoriesStyled>
              <MenuItemStyled to="/" style={isActiveLink}>Home</MenuItemStyled>
              <MenuItemStyled to="resources" style={isActiveLink}>Resources</MenuItemStyled>
              <MenuItemStyled to="about" style={isActiveLink}>About</MenuItemStyled>
            </MenuCategoriesStyled>
          </Col>
          <Col lg={3}>
            <ButtonStyled>
              <Message24Outline alt="" src="/message--24--outline.svg" />
              <Text1Styled>En</Text1Styled>
              <Message24Outline alt="" src="/right-arrow--24--outline.svg" />
            </ButtonStyled>
          </Col>
        </Row>
      </HeaderContainerStyled>
  );
}

export default Header;

Header.displayName='Header';
