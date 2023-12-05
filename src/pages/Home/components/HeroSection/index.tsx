import React from 'react';
import { AdditionalTerahash, AdditionalTerahashForContainer, Button1Styled, SectionStyled, ForYourDevices, Message24Outline1, Text11Styled, WeAccelerateYourStyled, HeroTextBlockStyled, SplineStyled, RowStyled, ImageStyled } from './styled';
import { Col, Container } from '../../../../common/components/grid';
import HeroImage from '../../../../assets/sphere.png';
import { BannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBannerStyled } from '../../../../common/components/parallax-banner-styled';
// import FirstBg from '../../assets/hero-bg.png';
// @ts-ignore
// import Scene from './models/scene.splinecode';

// const Scene = lazy(() => import('./models/scene.splinecode'));

const Layer1: BannerLayer = {
  translateY: [0, 30],
  // scale: [1, 1.5, "easeInCubic"],
  opacity: [1.0, 0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <SectionStyled>
      <HeroTextBlockStyled>
        <AdditionalTerahashForContainer>
          <AdditionalTerahash>{`Additional terahash `}</AdditionalTerahash>
          <ForYourDevices>for your devices</ForYourDevices>
          <AdditionalTerahash> forever</AdditionalTerahash>
        </AdditionalTerahashForContainer>
        <WeAccelerateYourStyled>
          We accelerate your equipment gently and well and conserve energy
        </WeAccelerateYourStyled>
        <Button1Styled>
          <Message24Outline1 alt="" src="/message--24--outline1.svg" />
          <Text11Styled>Select equipment</Text11Styled>
          <Message24Outline1 alt="" src="/right-arrow--24--outline1.svg" />
        </Button1Styled>
      </HeroTextBlockStyled>
    </SectionStyled>
  )
}

const Layer2: BannerLayer = {
  translateY: [0, 30],
  translateX: [0, -25],
  // speed: 2,
  // easing: 'easeOutQuad',
  opacity: [1.0, 0],
  // scale: [1, 1.5, "easeInCubic"],
  rotate: [0, 180],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <ImageStyled src={HeroImage} />
  )
}

export function HeroSection() {
  return (
    <ParallaxProvider>
      <Container>
        <RowStyled>
          <Col lg={6}>
            <ParallaxBannerStyled
              layers={[Layer1]}
            />
          </Col>
          <Col lg={6}>
            <ParallaxBannerStyled
              layers={[Layer2]}
            />
          </Col>
        </RowStyled>
      </Container>
    </ParallaxProvider>
  );
}
