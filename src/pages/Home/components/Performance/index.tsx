import React from 'react';
import { ContainerStyled, ImageStyled, OverlayStyled, PerformanceSubTitleStyled, PerformanceTitleStyled, SplineStyled, TextStyled } from './styled';
import { Col, Container, Row } from '../../../../common/components/grid';
import ImageBg from '../../../../assets/image32.png';

export function Performance() {
  return (
    <ContainerStyled image={ImageBg}>
      <Row>
        <Col>
          <PerformanceTitleStyled>Performance <span>vs</span> Energy saving</PerformanceTitleStyled>
          <PerformanceSubTitleStyled>Up to 15% energy efficiency relative to factory firmware</PerformanceSubTitleStyled>
        </Col>
      </Row>
      {/* <SplineStyled scene="https://prod.spline.design/XV-WcZsOaVmBBT0r/scene.splinecode" /> */}
      {/* <ImageStyled /> */}
      <OverlayStyled />
      <TextStyled style={{ position: 'absolute', top: '35%', width: '300px', textAlign: 'right', left: '12%' }}>Different acceleration modes</TextStyled>
      <TextStyled style={{ position: 'absolute', top: '50%', width: '300px', textAlign: 'right', left: '7%' }}>Quick switch between performance modes</TextStyled>
      <TextStyled style={{ position: 'absolute', top: '67%', width: '300px', textAlign: 'right', left: '12%' }}>Voltage settings for stable operation</TextStyled>
      <TextStyled style={{ position: 'absolute', top: '35%', width: '300px', textAlign: 'right', right: '15%' }}>Overclocking or low consumption modes</TextStyled>
      <TextStyled style={{ position: 'absolute', top: '50%', width: '300px', textAlign: 'right', right: '8%' }}>Switching off the fans</TextStyled>
      <TextStyled style={{ position: 'absolute', top: '67%', width: '300px', textAlign: 'right', right: '12%' }}>Savings in electricity consumption</TextStyled>
    </ContainerStyled>
  );
}
