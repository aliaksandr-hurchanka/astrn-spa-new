import { SectionStyled, RowStyled, ContainerStyled, HeadingLevel1Styled, DescriptionStyled } from './styled';
import { Col } from '../../../../common/components/grid';
import { BannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBannerStyled } from '../../../../common/components/parallax-banner-styled';

import { useTranslation } from 'react-i18next';
import { ButtonStyled } from '../../../../common/components/button-styled';
import { useEffect } from 'react';

export function HeroSection() {

  const { t } = useTranslation();

  const Layer1: BannerLayer = {
    translateY: [0, 30],
    opacity: [1.0, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <SectionStyled>
        <HeadingLevel1Styled dangerouslySetInnerHTML={{ __html: t('home-hero-title') }} />
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

  // useEffect(() => {
  //   var getParallaxContainer = document.querySelector(".parallax-container");
  //   var getParallaxContent = document.querySelector(".parallax-content");
  //   console.log(getParallaxContent, ' getParallaxContent');
    
  //   // @ts-ignore
  //   getParallaxContainer.addEventListener("mousemove", (e) => {
  //         // @ts-ignore
  //     let x = e.pageX / window.innerWidth;
  //         // @ts-ignore
  //     let y = e.pageY / window.innerHeight;
  //   // @ts-ignore
  //     this.style.transform = `translate(${x * 5}%, ${y * 5}%)`;
  //         // @ts-ignore
  //     getParallaxContent.style.transform = `translate(${-x * 8}%, ${-y * 8}%)`;
  //   })
  // }, []);

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
