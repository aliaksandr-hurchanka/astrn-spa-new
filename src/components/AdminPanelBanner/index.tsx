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
    translateY: [0, 0],
    // translateX: [-5, 10],
    opacity: [0, 3.0],
    speed: -5,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <ColStyled lg={4}>
          <HeadingLevel3 color='#FFB22E'>
            Administrator panel app
          </HeadingLevel3>
          <RegularTextLevel1 color='#FFFFFF'>
            The firmware interface is simple and easy to use. Always stay connected to your farm wherever you are. You can see how the administration panel works.
          </RegularTextLevel1>
          <ButtonStyled>
            Try Demo App
          </ButtonStyled>
        </ColStyled>
        <Col lg={1} />
      </>
    )
  };

    // --------- IMAGE -----------
    const layer2: BannerLayer = {
      // translateY: [0, 0],
      translateX: [55, 40],
      opacity: [0, 3.0],
      speed: -5,
      expanded: false,
      shouldAlwaysCompleteAnimation: true,
      children: (
        <Col lg={7}>
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
            style={{ aspectRatio: '1 / 1' }}
            layers={[layer1, layer2]}
          />
        </Row>
      </ContainerStyled>
      <RightShadowStyled />
    </AdminPanelBannerStyled>
  )
}

// const Layer1: BannerLayer = {
//   translateY: [0, 10],
//   scale: [0, 1, "easeInCubic"],
//   // opacity: [0, 1.0],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <LeftSectionStyled>
//       <h2>HASHRATE</h2>
//       <p>Increase the performance of miners to maximum values - up to 50%.</p>
//     </LeftSectionStyled>
//   )
// }

// const Layer2: BannerLayer = {
//   translateY: [0, 10],
//   scale: [0, 1, "easeInCubic"],
//   // opacity: [0, 1.0],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <LeftSectionStyled>
//       <h2>HASHRATE 2</h2>
//       <p>Increase the performance of miners to maximum values - up to 50%. 2</p>
//     </LeftSectionStyled>
//   )
// }

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

// export function AdminPanelBanner() {
//   return (
//     <>
//       <ParallaxProvider>
//         <Container>
//           <RowStyled height="100vh">
//             {/* <Col lg={12} style={{ textAlign: 'center' }}>
//               <ParallaxBannerStyled
//                 layers={[Layer1]}
//               />
//             </Col> */}
//             {/* <Col lg={8}>
//             <ParallaxBannerStyled
//               layers={[Layer2]}
//             />
//           </Col> */}
//           <div style={{ display: 'flex' }}>
//             <h1>
//               We are one of the market leaders
//             </h1>
//           </div>
//           </RowStyled>
//         </Container>
//       </ParallaxProvider>
//     </>
//   );
// }

// const Trail: any = ({ open, children }: any) => {
//   const items = React.Children.toArray(children)
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 2000, friction: 200 },
//     opacity: open ? 1 : 0,
//     x: open ? 0 : 20,
//     height: open ? 110 : 0,
//     from: { opacity: 0, x: 20, height: 0 },
//   })
//   return (
//     <div>
//       {trail.map(({ height, ...style }, index) => (
//         <a.div key={index} style={style}>
//           <a.div style={{ height }}>{items[index]}</a.div>
//         </a.div>
//       ))}
//     </div>
//   )
// }

// export function AdminPanelBanner() {
//   const { scrollYProgress } = useScroll()
//   console.log(scrollYProgress, 'scrollYProgress');

//   return (
//     <animated.div style={{ opacity: scrollYProgress }}>
//       <SectionWrapperStyled>
//         Hello World
//       </SectionWrapperStyled>
//     </animated.div>
//   )
// }

// export function AdminPanelBanner() {
//   return (
//     <Container height="100vh">
//       <Row>
//         <Col lg={4}>
//           <SectionWrapperStyled>
//             <h2>HASHRATE</h2>
//             <p>Increase the performance of miners to maximum values - up to 50%.</p>
//             <h2>INCOME</h2>
//             <p>No commissions. Firmware works only for you and brings income only to you.
//                 It is significantly more profitable to buy firmware at a fixed price, and use for years, receive all the additional income. No official and no hidden commissions. We know what we are talking about.</p>
//             <h2>RELIABILITY</h2>
//             <p>Time-tested. Over 100,000 firmware installations successfully installed since 2018.</p>
//           </SectionWrapperStyled>
//         </Col>
//         <Col lg={8}>

//         </Col>
//       </Row>
//     </Container>
//   );
// }

// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import { FlexWrapper } from "../../../../common/tokens/flexTokens";

// export function AdminPanelBanner() {
//   return (
//     <Container>
//       <Row>
//         <Col lg={5}>
//           <SectionWrapperStyled>
//             <h4>HASHRATE</h4>
//             <p>Increase the performance of miners to maximum values - up to 50%.</p>
//             <h4>INCOME</h4>
//             <p>No commissions. Firmware works only for you and brings income only to you.
//               It is significantly more profitable to buy firmware at a fixed price, and use for years, receive all the additional income. No official and no hidden commissions. We know what we are talking about.</p>
//             <h4>RELIABILITY</h4>
//             <p>Time-tested. Over 100,000 firmware installations successfully installed since 2018.</p>
//           </SectionWrapperStyled>
//         </Col>
//         <Col lg={7}>
//           <SectionWrapperStyled>
//             <FlexWrapper flexDirection="column">
//               <h3>
//                 We are <span>one</span> of the market <span>leaders</span>
//               </h3>
//               <Image src={Notebook} />
//             </FlexWrapper>
//           </SectionWrapperStyled>
//         </Col>
//       </Row>
//     </Container>
//   )
// }
