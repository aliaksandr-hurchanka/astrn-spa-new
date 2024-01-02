import React from 'react';
import { ColStyled, ContainerStyled, GradientLayerStyled, ParallaxBannerStyled, PerformanceSubTitleStyled, PerformanceTitleStyled, TextStyled } from './styled';
import { Col, Row } from '../../../../common/components/grid';
import { BannerLayer } from 'react-scroll-parallax';

export function Performance() {

  // --------- LEFT TEXT -----------
  const layer2: BannerLayer = {
    // translateX: [-10, 0],
    opacity: [-1.0, 3.0],
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
    style: { position: 'relative' },
    children: (
      <Row rowGap='75px'>
        <ColStyled lg={6} md={4} sm={4} alignItems='start'>
          <TextStyled>Different acceleration modes</TextStyled>
        </ColStyled>
        <ColStyled lg={6} md={4} sm={4} alignItems='end'>
          <TextStyled>Quick switch between performance modes</TextStyled>
        </ColStyled>
        <ColStyled lg={6} md={4} sm={4} alignItems='start'>
          <TextStyled>Voltage settings for stable operation</TextStyled>
        </ColStyled>
        <ColStyled lg={6} md={4} sm={4} alignItems='end'>
          <TextStyled>Different acceleration modes</TextStyled>
        </ColStyled>
        <ColStyled lg={6} md={4} sm={4} alignItems='start'>
          <TextStyled>Quick switch between performance modes</TextStyled>
        </ColStyled>
        <ColStyled lg={6} md={4} sm={4} alignItems='end'>
          <TextStyled>Voltage settings for stable operation</TextStyled>
        </ColStyled>
      </Row>
    )
  };

  // --------- GRADIENT -----------
  const layer4: BannerLayer = {
    translateY: [0, 0],
    opacity: [0.0, 3.0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <GradientLayerStyled />
      </>
    )
  };

  return (
    <ContainerStyled lgPt='80px' mdPt='80px' pt='40px'>
      <Row lgMb='80px' mdMb='80px' mb='40px'>
        <Col>
          <PerformanceTitleStyled>Performance <span>vs</span> Energy saving</PerformanceTitleStyled>
          <PerformanceSubTitleStyled>Up to 15% energy efficiency relative to factory firmware</PerformanceSubTitleStyled>
        </Col>
      </Row>
      <ParallaxBannerStyled
        layers={[layer4, layer2]}
      />
    </ContainerStyled>
  );
}
