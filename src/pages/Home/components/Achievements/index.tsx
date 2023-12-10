import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import { CenterColStyled, CountStyled, CountTextStyled, TitleStyled } from './styled';

export function Achievements() {
  return (
    <Container height='100vh'>
      <Row lgMt='150px'>
        <Col lg={1} />
        <CenterColStyled lg={10}>
          <TitleStyled>
            For 5 years we've been helping customers earn more, providing technical support and releasing updates — each time making the product even better.
          </TitleStyled>
        </CenterColStyled>
        <Col lg={1} />
      </Row>
      <Row>
        <CenterColStyled lg={4}>
          <CountStyled>235 000</CountStyled>
          <CountTextStyled>Projects completed</CountTextStyled>
        </CenterColStyled>
        <CenterColStyled lg={4}>
          <CountStyled>+50 000</CountStyled>
          <CountTextStyled>Hours Saved Annually</CountTextStyled>
        </CenterColStyled>
        <CenterColStyled lg={4}>
          <CountStyled>3 500</CountStyled>
          <CountTextStyled>Unique Users</CountTextStyled>
        </CenterColStyled>
      </Row>
    </Container>
  );
}
