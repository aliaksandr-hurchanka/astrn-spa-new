import { ColStyled, ColValueStyled, ContainerStyled, GradientLayerStyled, HeadingStyled, LineStyled, RegularTextStyled, ReliabilityStyled, ValueStyled, ValueTextStyled } from "./styled";
import { Col, Row } from "../../../../common/components/grid";
import { Image } from '../../../../common/components/image';
import LineImage from '../../../../assets/reliability/line.svg';
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { useState } from "react";
import { useWindowSize } from "../../../../common/hooks";
import { getFoundationLayerConfig, getLineLayerConfig, getTextLayerConfig } from "./helpers";

export function Reliability() {

  const [scroll, setScroll] = useState(0);
  const [deg, setDeg] = useState(15);

  const { isInfiniteDesktopView, isDesktopView, isMiddleDesktopView, isTabletView, isMobileView } = useWindowSize();

  window.addEventListener('scroll', () => {
    if (window.scrollY > (scroll + 100)) {
      setScroll(window.scrollY);
      setDeg(deg >= 360 ? 15 : (deg + 15));
    }
  });

    // --------- LINE -----------
    const layer1: BannerLayer = {
      ...getLineLayerConfig(isMobileView, isTabletView, isMiddleDesktopView, isDesktopView),
      shouldAlwaysCompleteAnimation: true,
      children: (
        <LineStyled>
          <Image src={LineImage} />
        </LineStyled>
      )
    };

    // --------- GRADIENT -----------
    const layer2: BannerLayer = {
      ...getFoundationLayerConfig(isMobileView),
      expanded: false,
      shouldAlwaysCompleteAnimation: true,
      children: (
        <GradientLayerStyled />
      )
    };

    // --------- TEXT -----------
    const layer3: BannerLayer = {
      ...getTextLayerConfig(isMobileView, isTabletView),
      shouldAlwaysCompleteAnimation: true,
      children: (
        isMobileView
        ? <Row rowGap='100px'>
          <ColValueStyled sm={4}>
            <ValueStyled deg={deg}>
              100
            </ValueStyled>
            <ValueTextStyled>
              thousand
            </ValueTextStyled>
            <RegularTextStyled color='#BFBFBF'>
              Firmware installations
            </RegularTextStyled>
          </ColValueStyled>
          <ColStyled sm={4}>
            <HeadingStyled>
              Reliability
            </HeadingStyled>
            <RegularTextStyled color='#BFBFBF'>
              Time-tested. Over 100,000 firmware installations successfully installed since 2018.
            </RegularTextStyled>
          </ColStyled>
        </Row>
        : <Row>
          {(isInfiniteDesktopView || isMiddleDesktopView) && <Col lg={1} />}
          <ColStyled lg={4} md={3}>
            <HeadingStyled>
              Reliability
            </HeadingStyled>
            <RegularTextStyled color='#BFBFBF'>
              Time-tested. Over 100,000 firmware installations successfully installed since 2018.
            </RegularTextStyled>
          </ColStyled>
          {(isInfiniteDesktopView || isMiddleDesktopView || isTabletView) && <Col lg={2} md={2} />}
          <ColValueStyled lg={4} md={3}>
            <ValueStyled deg={deg}>
              100
            </ValueStyled>
            <ValueTextStyled>
              thousand
            </ValueTextStyled>
            <RegularTextStyled color='#BFBFBF'>
              Firmware installations
            </RegularTextStyled>
          </ColValueStyled>
          {(isInfiniteDesktopView || isMiddleDesktopView) && <Col lg={1} />}
        </Row>
      )
    };

  return (
    <ReliabilityStyled>
      <ContainerStyled>
        <ParallaxBanner
          style={isMobileView ? { aspectRatio: '1 / 2' } : { aspectRatio: '2 / 1' }}
          layers={[layer2, layer1, layer3]}
        />
      </ContainerStyled>
    </ReliabilityStyled>
  );
}