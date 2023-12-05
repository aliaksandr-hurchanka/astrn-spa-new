import { Col, Container } from "../../../../common/components/grid";
import { ParallaxBannerStyled } from "../../../../common/components/parallax-banner-styled";
import Notebook from '../../../../assets/admin-panel-section/Screen.svg';
import IPhone from '../../../../assets/admin-panel-section/iPhone.svg';
import { ImageLayer1Styled, ImageLayer2Styled, LeftSectionStyled, RowStyled } from "./styled";
import { BannerLayer, ParallaxProvider } from "react-scroll-parallax";




// const Layer2: BannerLayer = {
//   translateX: [60, 0],
//   // speed: 2,
//   // easing: 'easeOutQuad',
//   // opacity: [0, 1.0],
//   // scale: [1, 1.5, "easeInCubic"],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <>
//       <ImageLayer1Styled src={Notebook} />
//       {/* <ImageLayer2Styled src={IPhone} /> */}
//     </>
//   )
// }

const Layer1: BannerLayer = {
  translateY: [-30, 30],
  // scale: [1.0, 1.0, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>Test 1</h2>
      <p>Description 1</p>
    </LeftSectionStyled>
  )
}

const Layer2: BannerLayer = {
  translateY: [30, 60],
  scale: [1.0, 2.0, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>Test 2</h2>
      <p>Description 2</p>
    </LeftSectionStyled>
  )
}

const Layer3: BannerLayer = {
  translateY: [60, 90],
  scale: [1.0, 2.0, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>Test 3</h2>
      <p>Description 3</p>
    </LeftSectionStyled>
  )
}

const Layer4: BannerLayer = {
  translateY: [90, 120],
  scale: [1.0, 2.0, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>Test 4</h2>
      <p>Description 4</p>
    </LeftSectionStyled>
  )
}

export function TextLayer() {
  return (
    <ParallaxProvider>
      <Container>
        <RowStyled height="100vh">
          <Col lg={12} style={{textAlign: 'center'}}>
            <ParallaxBannerStyled
              layers={[Layer1]}
            />
          </Col>
          {/* <Col lg={8}>
            <ParallaxBannerStyled
              layers={[Layer2]}
            />
          </Col> */}
        </RowStyled>
      </Container>
    </ParallaxProvider>
  );
}