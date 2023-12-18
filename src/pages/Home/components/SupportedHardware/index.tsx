import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import resources from '../../../../data/home-data.json';
import { ButtonColStyled, ButtonLinkStyled } from './styled';
import { ResourcesList } from '../../../../components/Resources';
import { HeadingLevel2, RegularTextLevel1 } from '../../../../common/tokens/typography';

export function SupportedHardware() {
  return (
    <Container lgPt='80px' lgPb='80px' mdPt='40px' mdPb='40px'>
      <Row lgMb='40px' mdMb='40px'>
        <Col>
          <HeadingLevel2 textAlign='center'>
            SUPPORTED HARDWARE UPGRADE
          </HeadingLevel2>
          <RegularTextLevel1 textAlign='center' color='#fff'>
            Pricing that scales with your business immediately.
          </RegularTextLevel1>
        </Col>
      </Row>
      <Row >
        <Col>
          <ResourcesList resources={resources} />
        </Col>
      </Row>
      <Row lgMt='24px' lgMb='80px'>
        <ButtonColStyled>
            <ButtonLinkStyled to="/resources">
              See all support devices
            </ButtonLinkStyled>
        </ButtonColStyled>
      </Row>
    </Container>
  );
}