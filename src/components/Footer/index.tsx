import React from 'react';
import { Col, Container, Row } from '../../common/components/grid';
import { Logo } from '../Logo';
import { Menu } from '../Menu/desktop';
import { FooterStyled, LineStyled } from './styled';

export function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Row lgMt='88px'>
          <Col lg={2}><Logo /></Col>
          <Col lg={10} />
        </Row>
        <Row lgMt='40px' mdMt='40px'>
          <Col lg={7}>
            <Menu />
          </Col>
          <Col lg={5} />
        </Row>
      </Container>
      <LineStyled />
      <Container lgPb='50px' mdPb='50px' pb='50px'>
        <Row>
          <Col lg={12} md={8} sm={4} >
            © 2023 Asteron. All rights reserved.
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
}
