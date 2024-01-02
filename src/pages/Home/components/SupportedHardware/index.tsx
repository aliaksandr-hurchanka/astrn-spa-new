import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import resources from '../../../../data/home-data.json';
import { ButtonColStyled, ButtonLinkStyled, ParallaxBannerStyled } from './styled';
import { ResourcesList } from '../../../../components/Resources';
import { HeadingLevel2, RegularTextLevel1 } from '../../../../common/tokens/typography';
import { BannerLayer } from 'react-scroll-parallax';

export function SupportedHardware() {

  // --------- TEXT -----------
  const layer1: BannerLayer = {
    translateY: [15, -5],
    translateX: [0, 0],
    opacity: [-0.5, 3.0],
    expanded: false,
    style: { position: 'relative' },
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
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
      </>
    )
  };

  return (
    <Container lgPb='120px'>
      <ParallaxBannerStyled
        // style={isMobileView ? { aspectRatio: '1 / 2' } : { aspectRatio: '1 / 1' }}
        style={{ overflow: 'visible' }}
        layers={[layer1]}
      />
    </Container>
  );
}