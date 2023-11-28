import React from 'react';
import { Col, Container, Row } from '../../common/components/grid';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { LineStyled } from './styled';

export function Footer() {
  return (
    <>
      <Container>
        <Row lgMt='88px'>
          <Col lg={2}><Logo /></Col>
          <Col lg={10} />
        </Row>
        <Row lgMt='40px'>
          <Col lg={7}>
            <Menu />
          </Col>
          <Col lg={5} />
        </Row>
      </Container>
      <LineStyled />
      <Container lgPb='50px'>
        <Row>
          <Col lg={4}>
            © 2023 Asteron. All rights reserved.
          </Col>
          <Col lg={5} />
          <Col lg={3}>
            Links
          </Col>
        </Row>
      </Container>
    </>
  );
}
