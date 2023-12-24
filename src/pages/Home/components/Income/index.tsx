import { ColStyled, ContainerStyled, HeadingStyled, LineStyled, RegularTextStyled, IncomeStyled, ValueStyled, ValueTextStyled, GradientLayerStyled } from "./styled";
import { Col, Row } from "../../../../common/components/grid";
import { Image } from '../../../../common/components/image';
import LineImage from '../../../../assets/income/lineR.svg';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import { useState } from 'react';

export function Income() {

  const [scroll, setScroll] = useState(0);
  const [deg, setDeg] = useState(45);

  window.addEventListener('scroll', () => {
    if (window.scrollY > (scroll + 100)) {
      setScroll(window.scrollY);
      setDeg(deg >= 360 ? 15 : (deg + 15));
    }
  });

  // --------- LINE -----------
  const layer1: BannerLayer = {
    translateY: [10, 10],
    translateX: [5, -10, 'easeOutQuad'],
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
    // speed: 10,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Row>
        <Col lg={4} style={{ paddingTop: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'end', textAlign: 'right' }}>
          <ValueTextStyled>
            Up to
          </ValueTextStyled>
          <ValueStyled deg={deg}>
            40%
          </ValueStyled>
          <ValueTextStyled>
            increased hashrate
          </ValueTextStyled>
          <RegularTextStyled color='#BFBFBF'>
            Increase the performance of miners to maximum values 
          </RegularTextStyled>
        </Col>
        <Col lg={3} />
        <ColStyled lg={5}>
          <HeadingStyled>
            Reliability
          </HeadingStyled>
          <RegularTextStyled color='#BFBFBF'>
            Time-tested. Over 100,000 firmware installations successfully installed since 2018.
          </RegularTextStyled>
        </ColStyled>
      </Row>
    )
  };

  return (
    <IncomeStyled>
      <ContainerStyled>
        <ParallaxBanner
          style={{ aspectRatio: '2 / 1' }}
          layers={[layer2, layer1, layer3]}
        />
      </ContainerStyled>
    </IncomeStyled>
  );
}
