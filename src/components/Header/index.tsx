import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from '../../common/components/grid';

import { ButtonStyled, Message24Outline, Text1Styled, HeaderContainerStyled, HeaderStyled } from './styled';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
function Header() {



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
    <HeaderStyled>
      <HeaderContainerStyled width='100%'>
        <Row height='80px' alignItems='center'>
          <Col lg={3}>
            <Logo />
          </Col>
          <Col lg={6}>
            <Menu />
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
    </HeaderStyled>
  );
}

export default Header;

Header.displayName = 'Header';
