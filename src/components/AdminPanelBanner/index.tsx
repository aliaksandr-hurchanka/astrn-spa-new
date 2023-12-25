import { ButtonStyled } from '../../common/components/button-styled';
import { Col, Row } from '../../common/components/grid';
import { Image } from '../../common/components/image';
import { HeadingLevel3, RegularTextLevel1 } from '../../common/tokens/typography';
import { AdminPanelBannerStyled, ColStyled, ContainerStyled, ImageStyled } from './styled';
import LargeTablet from '../../assets/admin-panel-section/large-tablet.png';
import { LeftShadowStyled, RightShadowStyled } from '../AdministratorPanel/styled';
import { useWindowSize } from '../../common/hooks';
import { useEffect } from 'react';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import { getImageLayerConfig, getTextLayerConfig } from './helpers';

export function AdminPanelBanner() {

  const { isMobileView, isTabletView } = useWindowSize();

  // useEffect(() => {
  //   const focusTag = document.querySelectorAll('#admin-panel-start-animation');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries?.[0];
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('visible-admin-panel');
  //       } else {
  //         entry.target.classList.remove('visible-admin-panel');
  //       }
  //     },
  //     { threshold: 0.1, rootMargin: '1%' }
  //   );
  //   focusTag.forEach((el) => observer.observe(el));
  // }, []);

  // --------- TEXT -----------
  const layer1: BannerLayer = {
    ...getTextLayerConfig(isMobileView),
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <ColStyled lg={4} sm={4}>
          <HeadingLevel3 color='#FFB22E'>
            Administrator panel app
          </HeadingLevel3>
          <RegularTextLevel1 color='#FFFFFF'>
            The firmware interface is simple and easy to use. Always stay connected to your farm wherever you are. You can see how the administration panel works.
          </RegularTextLevel1>
          <ButtonStyled type={isMobileView ? 'small' : 'large'}>
            Try Demo App
          </ButtonStyled>
        </ColStyled>
        {!isMobileView && <Col lg={1} />}
      </>
    )
  };

    // --------- IMAGE -----------
    const layer2: BannerLayer = {
      ...getImageLayerConfig(isMobileView),
      shouldAlwaysCompleteAnimation: true,
      children: (
        <Col lg={7} sm={4}>
          <ImageStyled>
            <Image src={LargeTablet} />
          </ImageStyled>
        </Col>
      )
    };

  return (
    <AdminPanelBannerStyled>
      {!isMobileView && !isTabletView && <LeftShadowStyled />}
      <ContainerStyled height='728px' lgPt='110px' lgPb='150px'>
        <Row>
          <ParallaxBanner
            style={isMobileView ? { aspectRatio: '1 / 2' } : { aspectRatio: '1 / 1' }}
            layers={isMobileView ? [layer1, layer2] : [layer1, layer2]}
          />
        </Row>
      </ContainerStyled>
      <RightShadowStyled />
    </AdminPanelBannerStyled>
  )
}
