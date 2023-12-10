// import { Col, Container, Row } from "../../../../common/components/grid";
// import { ParallaxBannerStyled } from "../../../../common/components/parallax-banner-styled";
// import Notebook from '../../../../assets/admin-panel-section/Screen.svg';
// import IPhone from '../../../../assets/admin-panel-section/iPhone.svg';
// import { ImageLayer1Styled, ImageLayer2Styled, LeftSectionStyled, RowStyled, SectionWrapperStyled } from "./styled";
// import { BannerLayer, ParallaxProvider } from "react-scroll-parallax";
// import { useTrail, a, useSpring, animated, useScroll } from '@react-spring/web'
// import React, { useState } from "react";
// import { Image } from "../../../../common/components/image";

import Group42 from '../../../../assets/Group 42.png';
import { Container } from '../../../../common/components/grid';
import { AppsTitleStyled } from './styled';

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

export function AdminPanelBanner() {
  return (
    <Container height='100vh'>
      <div className="apps">
        <AppsTitleStyled>
          <h3>
            We are <span>one</span> of the market <span>leaders</span>
          </h3>
        </AppsTitleStyled>
        <img className="apps-child" alt="" src={Group42} />
        <div className="card-parent">
          <div className="card">
            <b className="title">HASHRATE</b>
            <div className="description">
              Increase the performance of miners to maximum values - up to 50%.
            </div>
          </div>
          <div className="card">
            <b className="title">INCOME</b>
            <div className="description">
              <p className="no-commissions-firmware">
                No commissions. Firmware works only for you and brings income
                only to you.
              </p>
              <p className="it-is-significantly">
                It is significantly more profitable to buy firmware at a fixed
                price, and use for years, receive all the additional income. No
                official and no hidden commissions. We know what we are talking
                about.
              </p>
            </div>
          </div>
          <div className="card">
            <b className="title">RELIABILITY</b>
            <div className="description">
              Time-tested. Over 100,000 firmware installations successfully
              installed since 2018.
            </div>
          </div>
          <div className="card">
            <b className="title">Performance</b>
            <div className="description">Maximum performance modes</div>
          </div>
        </div>
      </div>
    </Container>
  )
}
