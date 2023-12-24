import { ColStyled, ContainerStyled, GradientLayerStyled, HeadingStyled, LineStyled, RegularTextStyled, ReliabilityStyled, ValueStyled, ValueTextStyled } from "./styled";
import { Col, Row } from "../../../../common/components/grid";
import { Image } from '../../../../common/components/image';
import LineImage from '../../../../assets/reliability/line.svg';
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { useState } from "react";

export function Reliability() {

  const [scroll, setScroll] = useState(0);
  const [deg, setDeg] = useState(15);

  window.addEventListener('scroll', () => {
    if (window.scrollY > (scroll + 100)) {
      setScroll(window.scrollY);
      setDeg(deg >= 360 ? 15 : (deg + 15));
    }
  });

    // --------- LINE -----------
    const layer1: BannerLayer = {
      translateY: [10, 10],
      translateX: [-10, 5, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
      shouldAlwaysCompleteAnimation: true,
      children: (
        <LineStyled>
          <Image src={LineImage} />
        </LineStyled>
      )
    };

    // --------- GRADIENT -----------
    const layer2: BannerLayer = {
      translateY: [0, 0],
      // translateX: [-5, 10],
      // opacity: [1.0, 0],
      // speed: 10,
      shouldAlwaysCompleteAnimation: true,
      children: (
        <GradientLayerStyled />
      )
    };

    // --------- TEXT -----------
    const layer3: BannerLayer = {
      translateY: [15, -5],
      translateX: [0, 0],
      opacity: [3.0, -1.0],
      shouldAlwaysCompleteAnimation: true,
      children: (
        <Row>
          <Col lg={1} />
          <ColStyled lg={4}>
            <HeadingStyled>
              Reliability
            </HeadingStyled>
            <RegularTextStyled color='#BFBFBF'>
              Time-tested. Over 100,000 firmware installations successfully installed since 2018.
            </RegularTextStyled>
          </ColStyled>
          <Col lg={3} />
          <Col lg={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
            <ValueStyled deg={deg}>
              100
            </ValueStyled>
            <ValueTextStyled>
              thousand
            </ValueTextStyled>
            <RegularTextStyled color='#BFBFBF'>
              Firmware installations
            </RegularTextStyled>
          </Col>
        </Row>
      )
    };

  return (
    <ReliabilityStyled>
      <ContainerStyled>
        <ParallaxBanner
          style={{ aspectRatio: '2 / 1' }}
          layers={[layer2, layer1, layer3]}
        />
      </ContainerStyled>
    </ReliabilityStyled>
  );
}