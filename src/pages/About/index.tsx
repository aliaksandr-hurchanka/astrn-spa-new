import { FirstLayer } from "./components/FirstLayer";
import { Container } from "../../common/components/grid";
import { BannerLayer, Parallax, ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import './components/styles.css';
import { SecondLayer } from "./components/SecondLayer";

export function About()  {
  return (
    <ParallaxProvider>
      <FirstLayer />
      <SecondLayer />
      {/* <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}
    </ParallaxProvider>
  );
}

// const background: BannerLayer = {
//   image:
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
//   translateY: [0, 50],
//   opacity: [1, 0.3],
//   scale: [1.05, 1, 'easeOutCubic'],
//   shouldAlwaysCompleteAnimation: true,
// };

// const headline: BannerLayer = {
//   translateY: [0, 30],
//   scale: [1, 1.05, 'easeOutCubic'],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <div className="absolute inset-0 flex items-center justify-center">
//       <h1 className="text-6xl md:text-8xl text-white font-thin">
//         Hello World!
//       </h1>
//     </div>
//   ),
// };

// const foreground: BannerLayer = {
//   image:
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
//   translateY: [0, 15],
//   scale: [1, 1.1, 'easeOutCubic'],
//   shouldAlwaysCompleteAnimation: true,
// };

// const gradientOverlay: BannerLayer = {
//   opacity: [0, 0.9],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: (
//     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
//   ),
// };

// export function About()  {
//   return (
//     // <ParallaxProvider>
//     //   <Parallax
//     //     translateX={['-1400px', '0px']}
//     //     scale={[0.1, 1]}
//     //     // rotate={[-180, 0]}
//     //     easing="easeOutQuad"
//     //   >
//     //     <div style={{ height: '100vh', backgroundColor: '#fff' }}>
//     //       <h1>Hello</h1>
//     //     </div>
//     //   </Parallax>
//     //   <Parallax
//     //   >
//     //     <div style={{ height: '100vh', backgroundColor: '#333' }}>
//     //       <h1>Hello2</h1>
//     //     </div>
//     //   </Parallax>
//     // </ParallaxProvider>
//     <ParallaxProvider>
//       <ParallaxBanner
//         layers={[background, headline, foreground, gradientOverlay]}
//         className="aspect-[2/1] bg-gray-900"
//       />
//     </ParallaxProvider>
//   );
// }