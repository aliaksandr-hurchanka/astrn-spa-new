import {
  SectionStyled,
  RowStyled,
  ContainerStyled,
  HeadingLevel1Styled,
  DescriptionStyled,
  TestStyled,
} from "./styled";
import { Col, Container, Row } from "../../../../common/components/grid";
import { BannerLayer, ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBannerStyled } from "../../../../common/components/parallax-banner-styled";

import { useTranslation } from "react-i18next";
import { ButtonStyled } from "../../../../common/components/button-styled";
import { SectionStyled as HomeSectionStyled } from "../../styled";
import { useEffect } from "react";
import "./style.css";


export function HeroSection() {
  const { t } = useTranslation();

  // useEffect(() => {
    // const controller = new ScrollMagic.Controller();

    // // @ts-ignore
    // new ScrollMagic.Scene({
    //   triggerElement: "#trigger1",
    //   triggerHook: 0.9, // show, when scrolled 10% into view
    //   duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    //   offset: 50 // move trigger to center of element
    // })
    // .setClassToggle("#reveal", "visible") // add class to reveal
    // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);

  //   const h2s = document.querySelectorAll("h2");

  //   const observer = new IntersectionObserver(
  //     (entries, options) => {        
  //       for (const entry of entries) {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("visible");
  //           entry.target.setAttribute('color', 'red');
  //           console.log(entry.target.getBoundingClientRect(), 'ping');
            
  //         } else {
  //           entry.target.classList.remove("visible");
  //         }
  //       }
  //     },
  //     { threshold: 0.1, rootMargin: "1%" }
  //   );

  //   h2s.forEach((el) => observer.observe(el));
  // }, []);

  return (
    <>
      <Container height="100vh">
        <Row>
          <Col sm={4} md={8} lg={6}>
            <SectionStyled>
              <HeadingLevel1Styled
                dangerouslySetInnerHTML={{ __html: t("home-hero-title") }}
              />
              <DescriptionStyled>{t("home-hero-description")}</DescriptionStyled>
              <ButtonStyled>{t("home-hero-button")}</ButtonStyled>
            </SectionStyled>
          </Col>
        </Row>
      </Container>
      {/* <h2>
        kdjflksjflkjsdflkjsd jslkdj flksd lksjdfklj sldkfj lskdfj sd
        dfklsdfksdjfklsdlkjflksdjfkjsdklfjlskdjflksdflkj
        dflkdsjflkjsdflkjsdlkfjlksdjflksdjf
      </h2>
      <h2>
        kdjflksjflkjsdflkjsd jslkdj flksd lksjdfklj sldkfj lskdfj sd
        dfklsdfksdjfklsdlkjflksdjfkjsdklfjlskdjflksdflkj
        dflkdsjflkjsdflkjsdlkfjlksdjflksdjf
      </h2>
      <h2>
        kdjflksjflkjsdflkjsd jslkdj flksd lksjdfklj sldkfj lskdfj sd
        dfklsdfksdjfklsdlkjflksdjfkjsdklfjlskdjflksdflkj
        dflkdsjflkjsdflkjsdlkfjlksdjflksdjf
      </h2>
      <h2>
        kdjflksjflkjsdflkjsd jslkdj flksd lksjdfklj sldkfj lskdfj sd
        dfklsdfksdjfklsdlkjflksdjfkjsdklfjlskdjflksdflkj
        dflkdsjflkjsdflkjsdlkfjlksdjflksdjf
      </h2> */}
    </>
  );

  // return (
  //   <>
  //     <Container height="100vh">
  //       <SectionStyled style={{ width: "50%" }}>
  //         <HeadingLevel1Styled
  //           dangerouslySetInnerHTML={{ __html: t("home-hero-title") }}
  //         />
  //         <DescriptionStyled>{t("home-hero-description")}</DescriptionStyled>
  //         <ButtonStyled>{t("home-hero-button")}</ButtonStyled>
  //       </SectionStyled>
  //     </Container>
  //     <div id="trigger1" className="spacer s0" />
  //     <TestStyled id="reveal">
  //       fldsf;lkdflk ;ldsfl; kdslkf l;kds kfkdsjf ljdslkfj sdkj lkds flkjdflk s
  //     </TestStyled>
  //   </>
  // );

  // const Layer1: BannerLayer = {
  //   translateY: [100, 0],
  //   translateX: [30, 100],
  //   opacity: [1.0, 0],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  //     <SectionStyled style={{ width: '50%' }}>
  //       <HeadingLevel1Styled
  //         dangerouslySetInnerHTML={{ __html: t("home-hero-title") }}
  //       />
  //       <DescriptionStyled>{t("home-hero-description")}</DescriptionStyled>
  //       <ButtonStyled>{t("home-hero-button")}</ButtonStyled>
  //     </SectionStyled>
  //   ),
  // };

  // const Layer2: BannerLayer = {
  //   translateY: [-50, 100],
  //   // translateX: [30, 100],
  //   opacity: [1.0, 0],
  //   shouldAlwaysCompleteAnimation: true,
  //   expanded: false,
  //   children: (
  // <SectionStyled style={{ width: '50%' }}>
  //   <HeadingLevel1Styled
  //     dangerouslySetInnerHTML={{ __html: t("home-hero-title") }}
  //   />
  //   <DescriptionStyled>{t("home-hero-description")}</DescriptionStyled>
  //   <ButtonStyled>{t("home-hero-button")}</ButtonStyled>
  // </SectionStyled>
  //   ),
  // };

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

  // return (
  //   <ParallaxProvider>
  //     <ContainerStyled>
  //       <RowStyled>
  //         <Col lg={5}>
  //           <ParallaxBannerStyled
  //             layers={[Layer1]}
  //           />
  //         </Col>
  //         <Col lg={7}>
  //           {/* <ParallaxBannerStyled
  //             layers={[Layer2]}
  //           /> */}
  //         </Col>
  //       </RowStyled>
  //     </ContainerStyled>
  //   </ParallaxProvider>
  // );

  // useEffect(() => {
  //   window.ScrollOut({
  //     cssProps: {
  //       visibleY: true,
  //       viewportY: true
  //     }
  //   });

  //   window.Splitting({ target: '.heading' });
  // }, []);

  // return (
  //       <ParallaxProvider>
  //       <HomeSectionStyled>
  //         <ParallaxBannerStyled layers={[Layer1]} />
  //       </HomeSectionStyled>
  //       <HomeSectionStyled>
  //         <ParallaxBannerStyled layers={[Layer2]} />
  //       </HomeSectionStyled>
  //     </ParallaxProvider>
  // );

  //   return (
  //     // <ParallaxProvider>
  //     //   <HomeSectionStyled>
  //     //     <ParallaxBannerStyled layers={[Layer1]} />
  //     //   </HomeSectionStyled>
  //     // </ParallaxProvider>
  //     <>
  //     <section className="intro-section">
  //   <h1 className="intro-heading"> Watch</h1>

  //   <p>The latest in time-telling technology.</p>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/bl_NUhqLC8o/800x800" /></figure>

  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <div className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </div>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/rCOWMC8qf8A/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/mAsKA0jFfeQ/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/P4a43pThV3c/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/Odhl-kitI2c/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/PIKyHi0jsAI/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/hBuwVLcYTnA/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/ZEsfrZjZClQ/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>

  // <section className="content-section" data-scroll>
  //   <figure className="figure"><img src="https://source.unsplash.com/iFPBRwZ4I-M/800x800" /></figure>
  //   <div className="content">
  //     <header className="header">
  //       <div className="subheading">All-Old Techniques</div>
  //       <h2 className="heading">Not Evolved,<br />not transformed either.</h2>
  //     </header>
  //     <p className="paragraph">
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nisi illum rem recusandae. Tempore consequuntur nihil cumque quis nam deserunt earum atque et ullam facere accusamus cum natus, autem numquam.
  //     </p>
  //   </div>
  // </section>
  // </>
  //   );
}
