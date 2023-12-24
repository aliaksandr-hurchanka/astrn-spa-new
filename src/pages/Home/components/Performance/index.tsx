import React from 'react';
import { GradientLayerStyled, PerformanceSubTitleStyled, PerformanceTitleStyled, TextStyled } from './styled';
import { Col, Container, Row } from '../../../../common/components/grid';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

export function Performance() {

  // --------- TOP TEXT -----------
  const layer1: BannerLayer = {
    translateY: [15, -5],
    translateX: [0, 0],
    opacity: [-1.0, 3.0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Row>
        <Col>
          <PerformanceTitleStyled>Performance <span>vs</span> Energy saving</PerformanceTitleStyled>
          <PerformanceSubTitleStyled>Up to 15% energy efficiency relative to factory firmware</PerformanceSubTitleStyled>
        </Col>
      </Row>
    )
  };

  // --------- LEFT TEXT -----------
  const layer2: BannerLayer = {
    // translateY: [-5, 15],
    translateX: [-10, 0],
    opacity: [-1.0, 3.0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <TextStyled style={{ position: 'absolute', top: '35%', width: '300px', textAlign: 'right', left: '12%' }}>Different acceleration modes</TextStyled>
        <TextStyled style={{ position: 'absolute', top: '50%', width: '300px', textAlign: 'right', left: '7%' }}>Quick switch between performance modes</TextStyled>
        <TextStyled style={{ position: 'absolute', top: '67%', width: '300px', textAlign: 'right', left: '12%' }}>Voltage settings for stable operation</TextStyled>
      </>
    )
  };

  // --------- RIGHT TEXT -----------
  const layer3: BannerLayer = {
    // translateY: [15, -5],
    translateX: [10, 0],
    opacity: [0, 3.0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <TextStyled style={{ position: 'absolute', top: '35%', width: '300px', textAlign: 'right', right: '15%' }}>Overclocking or low consumption modes</TextStyled>
        <TextStyled style={{ position: 'absolute', top: '50%', width: '300px', textAlign: 'right', right: '8%' }}>Switching off the fans</TextStyled>
        <TextStyled style={{ position: 'absolute', top: '67%', width: '300px', textAlign: 'right', right: '12%' }}>Savings in electricity consumption</TextStyled>
      </>
    )
  };

  // --------- GRADIENT -----------
  const layer4: BannerLayer = {
    translateY: [30, 30],
    // translateX: [-5, 10],
    opacity: [-1.0, 3.0],
    // speed: 10,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <GradientLayerStyled />
    )
  };

  return (
    <Container height='828px'>
      {/* <SplineStyled scene="https://prod.spline.design/XV-WcZsOaVmBBT0r/scene.splinecode" /> */}
      {/* <ImageStyled /> */}
      {/* <OverlayStyled /> */}
      <ParallaxBanner
        style={{ aspectRatio: '2 / 1' }}
        layers={[layer4, layer1, layer2, layer3]}
      />
    </Container>
  );
}
