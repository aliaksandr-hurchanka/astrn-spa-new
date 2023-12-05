import { Col, Container } from "../../../../common/components/grid";
import { ParallaxBannerStyled } from "../../../../common/components/parallax-banner-styled";
import Notebook from '../../../../assets/admin-panel-section/Screen.svg';
import IPhone from '../../../../assets/admin-panel-section/iPhone.svg';
import { ImageLayer1Styled, ImageLayer2Styled, LeftSectionStyled, RowStyled } from "./styled";
import { BannerLayer, ParallaxProvider } from "react-scroll-parallax";


const Layer1: BannerLayer = {
  translateY: [0, 10],
  scale: [0, 1, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>HASHRATE</h2>
      <p>Increase the performance of miners to maximum values - up to 50%.</p>
    </LeftSectionStyled>
  )
}

const Layer2: BannerLayer = {
  translateY: [0, 10],
  scale: [0, 1, "easeInCubic"],
  // opacity: [0, 1.0],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <LeftSectionStyled>
      <h2>HASHRATE 2</h2>
      <p>Increase the performance of miners to maximum values - up to 50%. 2</p>
    </LeftSectionStyled>
  )
}

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

export function AdminPanelBanner() {
  return (
    <>
      <ParallaxProvider>
        <Container>
          <RowStyled height="100vh">
            <Col lg={12} style={{ textAlign: 'center' }}>
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
    </>
  );
}