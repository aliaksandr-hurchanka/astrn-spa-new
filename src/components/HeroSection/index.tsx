import React from 'react';
import { Link } from 'react-router-dom';
import { AdditionalTerahash, AdditionalTerahashForContainer, Button1Styled, SectionStyled, ForYourDevices, Message24Outline1, Text11Styled, WeAccelerateYourStyled, HeroTextBlockStyled, SplineStyled, RowStyled } from './styled';
import { Col, Container, Row } from '../../common/components/grid';
import { ParallaxStyled } from './styled';
// import FirstBg from '../../assets/hero-bg.png';
// @ts-ignore
import Scene from './models/scene.splinecode';

export function HeroSection() {
  return (
    <Container>
      <RowStyled>
        <Col lg={6}>
          <SectionStyled>
            <HeroTextBlockStyled>
              {/* <ParallaxStyled bg={FirstBg} /> */}
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
        </Col>
        <Col lg={6}>
          <SplineStyled scene={Scene} />
        </Col>
      </RowStyled>
    </Container>
  );
}
