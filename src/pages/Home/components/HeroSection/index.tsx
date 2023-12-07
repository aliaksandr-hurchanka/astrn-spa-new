import { SectionStyled, RowStyled, ContainerStyled, HeadingLevel1Styled, DescriptionStyled } from './styled';
import { Col } from '../../../../common/components/grid';
import { BannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBannerStyled } from '../../../../common/components/parallax-banner-styled';

import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../../../../common/components/button-styled';

export function HeroSection() {
  
  const { t } = useTranslation();

  const Layer1: BannerLayer = {
    translateY: [-5, -15],
    opacity: [1.0, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <SectionStyled>
        <HeadingLevel1Styled dangerouslySetInnerHTML={{__html: t('home-hero-title')}} />
          <DescriptionStyled>
            {t('home-hero-description')}
          </DescriptionStyled>
          <ButtonStyled>
            {t('home-hero-button')}
          </ButtonStyled>
      </SectionStyled>
    )
  }

  // const Layer2: BannerLayer = {
  //   translateY: [30, 15],
  //   opacity: [1.0, 0],
  //   rotate: [0, 180],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <ImageStyled src={HeroImage} />
  //   )
  // }
  
  return (
    <ParallaxProvider>
      <ContainerStyled>
        <RowStyled>
          <Col lg={5}>
            <ParallaxBannerStyled
              layers={[Layer1]}
            />
          </Col>
          <Col lg={7}>
            {/* <ParallaxBannerStyled
              layers={[Layer2]}
            /> */}
          </Col>
        </RowStyled>
      </ContainerStyled>
    </ParallaxProvider>
  );
}
