import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { Container, Row } from "../../../../common/components/grid";
import { Image } from '../../../../common/components/image';
import HeroImage from '../../../../assets/PatternDark.png';
import { HeadingLevel1 } from "../../../../common/tokens/typography";
import { getTextStyles } from "../../../../common/utils/styles";


export const TestStyled = styled.div`
  opacity: 0;
    -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
          -o-transform: scale(0.9);
            transform: scale(0.9);
    -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -ms-transition: all 1s ease-in-out;
          -o-transition: all 1s ease-in-out;
            transition: all 1s ease-in-out;
  &.visible {
    opacity: 1;
    -webkit-transform: none;
        -moz-transform: none;
        -ms-transform: none;
          -o-transform: none;
            transform: none;
  }
`;

export const HeadingLevel1Styled = styled(HeadingLevel1)`
  color: #FFB22E;
  > span {
    color: #fff;
  }
`;

export const SplineStyled = styled(Spline)`
  z-index: 0;
  margin-top: 0;
  max-height: 100vh!important;
`;

export const RowStyled = styled(Row)`
  position: relative;
  height: 100vh;
`;

export const AsteronIconStyled = styled.img`
  position: relative;
  width: 121.5px;
  height: 21.24px;
`;
export const LogoStyled = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;

export const ImageStyled = styled(Image)`
  display: flex;
  align-items: center;
  margin-top: -80px;
`;


export const Navigation1Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 80px;
`;
export const ImageContainerStyled = styled.div`
  position: absolute;
  top: 192px;
  left: 736px;
  width: 554px;
  height: 464px;
`;
export const AdditionalTerahash = styled.span``;
export const ForYourDevices = styled.span`
  color: var(--colors-text-primary);
`;
export const AdditionalTerahashForContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 513px;
`;
export const DescriptionStyled = styled.p`
  ${getTextStyles('Montserrat', 400, 16, 24)}
  color: #fff;
`;
export const SectionStyled = styled.div`
  height: calc(100vh - 360px);
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: var(--header-h1-size);
  color: var(--colors-primary);

  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
              transform: translateY(100px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
              transform: translateY(100px);
    }
  }
`;

export const ContainerStyled = styled(Container)`
  /* background: url(${HeroImage}) no-repeat;
  background-position: 0 25%; */
`;





























// export const HeroTextBlockStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 32px;
//   margin-top: -160px;
//   align-items: flex-start;
// `;

export const HeaderStyled = styled.div`
  height: 80px;
  align-items: center;
  display: flex;
`;
export const PatternDark1Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--colors-background);
  width: 1440px;
  height: 950px;
  overflow: hidden;
`;
export const WeAreOne = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 473px;
`;
export const Income = styled.b`
  position: absolute;
  top: 13px;
  left: 80px;
  line-height: 32px;
  display: inline-block;
  width: 311px;
`;
export const NoCommissionsTheStyled = styled.div`
  position: absolute;
  top: 59px;
  left: 80px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 376px;
`;
export const FrameChildStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.25px;
  background-color: var(--colors-primary);
  width: 56px;
  height: 56px;
`;
export const Bitcoin24Outline = styled.img`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
export const RectangleParentStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 56px;
  height: 56px;
`;
export const IncomeParentStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 456px;
  height: 107px;
`;
export const GroupWrapperStyled = styled.div`
  position: absolute;
  top: 146px;
  left: 0px;
  width: 456px;
  height: 131px;
`;
export const Hashrate = styled.b`
  position: absolute;
  top: 12px;
  left: 80px;
  line-height: 32px;
  display: inline-block;
  width: 346px;
`;
export const IncreaseThePerformanceStyled = styled.div`
  position: absolute;
  top: 58px;
  left: 80px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 375px;
`;
export const FrameGroupStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 456px;
  height: 106px;
`;
export const FrameInnerStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 24px;
  width: 72px;
  height: 72px;
`;
export const TimeTestedOver100000Styled = styled.div`
  position: absolute;
  top: 59px;
  left: 80px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 375px;
`;
export const FrameContainerStyled = styled.div`
  position: absolute;
  top: 317px;
  left: 0px;
  width: 456px;
  height: 107px;
`;
export const FrameParentStyled = styled.div`
  position: relative;
  width: 456px;
  height: 424px;
  font-size: var(--display-xs-medium-size);
`;
export const WeAreOneOfTheMarketLeadeParentStyled = styled.div`
  position: absolute;
  top: 126px;
  left: 736px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-45xl);
`;
export const DevicesMacbookPro = styled.img`
  position: absolute;
  top: 122px;
  left: 0px;
  width: 903px;
  height: 658px;
  object-fit: cover;
`;
export const AppsStyled = styled.div`
  position: relative;
  background-color: var(--colors-text-primary);
  width: 1440px;
  height: 950px;
  overflow: hidden;
  flex-shrink: 0;
  font-size: var(--header-h1-size);
`;
export const PatternDark2Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--colors-background);
  width: 1440px;
  height: 576px;
  overflow: hidden;
`;
export const For5Years = styled.b`
  position: absolute;
  top: 1px;
  left: 232px;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 977px;
`;
export const B = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 261px;
`;
export const ProjectsCompletedStyled = styled.div`
  position: absolute;
  top: 68px;
  left: 0px;
  font-size: var(--scale-lg-size);
  line-height: 28px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 261px;
`;
export const Parent1Styled = styled.div`
  position: relative;
  width: 261px;
  height: 96px;
`;
export const FlexStyled = styled.div`
  position: absolute;
  top: 326px;
  left: 265px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px;
  gap: var(--gap-45xl);
  color: var(--colors-primary);
`;
export const Text2Styled = styled.div`
  position: relative;
  background-color: var(--colors-text-primary);
  width: 1440px;
  height: 576px;
  text-align: center;
  font-size: var(--header-h1-size);
`;
export const PatternDark3Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--colors-background);
  width: 1440px;
  height: 564px;
  overflow: hidden;
`;
export const SupportedHardwareFor = styled.b`
  position: absolute;
  top: 77px;
  left: 150px;
  font-size: var(--header-h2-size);
  letter-spacing: -0.02em;
  line-height: 44px;
  display: inline-block;
  width: 878px;
`;
export const PricingThatScalesStyled = styled.div`
  position: absolute;
  top: 153px;
  left: 150px;
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 919px;
`;
export const AntminerS19XpStyled = styled.div`
  position: relative;
  line-height: 30px;
  font-weight: 500;
  display: inline-block;
  width: 295px;
`;
export const DivStyled = styled.div`
  position: relative;
  line-height: 32px;
  font-weight: 500;
  display: inline-block;
  width: 16px;
  flex-shrink: 0;
`;
export const Div1Styled = styled.div`
  position: relative;
  font-size: var(--header-h1-size);
  letter-spacing: -0.02em;
  line-height: 60px;
  font-weight: 500;
  display: inline-block;
  width: 123px;
  flex-shrink: 0;
`;
export const FrameDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  font-size: var(--display-xs-medium-size);
  color: var(--gray-900);
`;
export const EquipmentCardStyled = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--colors-text-primary);
  width: 359px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xl) var(--padding-13xl) var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-7xs);
`;
export const EquipmentCardParentStyled = styled.div`
  position: absolute;
  top: 247px;
  left: 150px;
  width: 1140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  font-size: var(--header-h5-size);
  color: var(--colors-background);
  font-family: var(--display-lg-medium);
`;
export const Text3Styled = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
export const Button2Styled = styled.div`
  position: absolute;
  top: 425px;
  left: 150px;
  border-radius: var(--br-7xs);
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  height: 46px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--palette-gray-grey-800);
  font-family: var(--display-lg-medium);
`;
export const Equipment1Styled = styled.div`
  position: relative;
  background-color: var(--colors-text-primary);
  width: 1440px;
  height: 564px;
`;
export const PatternDark4Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--colors-background);
  width: 1440px;
  height: 940px;
  overflow: hidden;
`;
export const Vs = styled.span`
  color: var(--colors-primary);
`;
export const PerformanceVsEnergyContainer = styled.b`
  position: absolute;
  top: 128px;
  left: 150px;
  font-size: var(--header-h1-size);
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 1140px;
`;
export const WithOurIntegratedStyled = styled.div`
  position: absolute;
  top: 200px;
  left: 261px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--gray-400);
  display: inline-block;
  width: 919px;
`;
export const DevicesAppleIphone12 = styled.img`
  position: absolute;
  top: 328px;
  left: calc(50% - 123px);
  width: 246px;
  height: 500px;
  object-fit: cover;
`;
export const RectangleParent1Styled = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
`;
export const Title = styled.b`
  position: relative;
  line-height: 32px;
  display: inline-block;
  width: 359px;
`;
export const StayConnectedWith = styled.p`
  margin-block-start: 0;
  margin-block-end: 16px;
`;
export const YouAre = styled.p`
  margin: 0;
`;
export const StayConnectedWithContainerStyled = styled.div`
  position: relative;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 295px;
`;
// export const SectionStyled = styled.div`
//   position: absolute;
//   top: 296px;
//   left: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-13xl) 0px;
//   gap: var(--gap-5xl);
// `;
// export const Section1Styled = styled.div`
//   position: absolute;
//   top: 296px;
//   left: 931px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-13xl) 0px;
//   gap: var(--gap-5xl);
// `;
// export const Section2Styled = styled.div`
//   position: absolute;
//   top: 612px;
//   left: 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-13xl) 0px;
//   gap: var(--gap-5xl);
// `;
// export const Section3Styled = styled.div`
//   position: absolute;
//   top: 612px;
//   left: 931px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-13xl) 0px;
//   gap: var(--gap-5xl);
// `;
export const FeatureStyled = styled.div`
  position: relative;
  background-color: var(--colors-text-primary);
  width: 1440px;
  height: 940px;
  text-align: center;
  font-size: var(--display-xs-medium-size);
`;
export const PatternDark5Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--colors-background);
  width: 1440px;
  height: 1293px;
  overflow: hidden;
`;
export const FrequentlyAskedQuestions = styled.b`
  position: absolute;
  top: 126px;
  left: 150px;
  font-size: var(--header-h1-size);
  letter-spacing: -0.02em;
  line-height: 60px;
  text-transform: uppercase;
  display: inline-block;
  width: 977px;
`;
export const FlexIsTheStyled = styled.div`
  position: absolute;
  top: 202px;
  left: 150px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 919px;
`;
export const WhatShippingOptions = styled.b`
  position: absolute;
  top: 72px;
  left: 0px;
  line-height: 30px;
  display: inline-block;
  width: 254px;
`;
export const ForUsaDomesticStyled = styled.div`
  position: absolute;
  top: 156px;
  left: 0px;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 360px;
`;
export const FrameIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48px;
  height: 48px;
`;
export const WhatShippingOptionsDoYouHParentStyled = styled.div`
  position: absolute;
  top: 326px;
  left: 150px;
  width: 360px;
  height: 238px;
`;
export const WhatPaymentMethods = styled.b`
  position: absolute;
  top: 72px;
  left: 0px;
  line-height: 30px;
  display: inline-block;
  width: 259px;
`;
export const WhatPaymentMethodsDoYouAcParentStyled = styled.div`
  position: absolute;
  top: 326px;
  left: 541px;
  width: 360px;
  height: 238px;
`;
export const WhatPaymentMethodsDoYouAcGroupStyled = styled.div`
  position: absolute;
  top: 596px;
  left: 541px;
  width: 360px;
  height: 238px;
`;
export const HowLongDoes = styled.b`
  position: absolute;
  top: 72px;
  left: 0px;
  line-height: 30px;
  display: inline-block;
  width: 238px;
`;
export const HowLongDoesItTakeToShipParentStyled = styled.div`
  position: absolute;
  top: 596px;
  left: 932px;
  width: 360px;
  height: 238px;
`;
export const Faq4Styled = styled.div`
  position: relative;
  background-color: var(--colors-text-primary);
  width: 1440px;
  height: 960px;
  font-size: var(--header-h5-size);
`;
export const MenuCategories1Styled = styled.div`
  position: absolute;
  top: 169px;
  left: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
  color: var(--colors-text-primary);
`;
export const Logo1Styled = styled.div`
  position: absolute;
  top: 88px;
  left: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
export const AsteronAllRightsStyled = styled.div`
  position: absolute;
  top: 289px;
  left: 150px;
  line-height: 24px;
`;
export const TermsStyled = styled.div`
  position: absolute;
  top: 289px;
  left: 1051px;
  line-height: 24px;
`;
export const PrivacyStyled = styled.div`
  position: absolute;
  top: 289px;
  left: 1134px;
  line-height: 24px;
`;
export const CookiesStyled = styled.div`
  position: absolute;
  top: 289px;
  left: 1225px;
  line-height: 24px;
`;
export const FooterMainChildStyled = styled.div`
  position: absolute;
  top: 242.5px;
  left: -0.5px;
  border-top: 1px solid var(--gray-700);
  box-sizing: border-box;
  width: 1441px;
  height: 1px;
`;
export const LabelStyled = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: none;
  width: 160px;
  flex-shrink: 0;
`;
export const Text4Styled = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
`;
export const Content1Styled = styled.div`
  width: 292px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
export const Input2Styled = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--colors-text-primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  height: 46px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-sm);
  color: var(--gray-5001);
`;
export const InputAndLabelStyled = styled.div`
  width: 320px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
export const HintTextStyled = styled.div`
  position: relative;
  font-size: var(--text-sm-regular-size);
  line-height: 20px;
  color: var(--gray-500);
  display: none;
  width: 160px;
`;
export const Input1Styled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 320px;
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
export const InputStyled = styled.div`
  position: relative;
  width: 320px;
  height: 46px;
`;
export const Button3Styled = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  height: 46px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--palette-gray-grey-800);
`;
export const InputParentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
export const WeCareAboutContainerStyled = styled.div`
  position: relative;
  font-size: var(--scale-xs-size);
  line-height: 18px;
  font-family: var(--header-h5);
  display: inline-block;
  width: 320px;
  color: var(--color-silver);
`;
export const FrameParent1Styled = styled.div`
  position: absolute;
  top: 133px;
  left: 931px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--gray-800);
  font-family: var(--display-lg-medium);
`;
export const FooterMainStyled = styled.div`
  position: relative;
  background-color: var(--colors-background);
  width: 1440px;
  height: 401px;
  overflow: hidden;
  flex-shrink: 0;
  color: var(--colors-text-secondary);
`;
export const HomePageRootStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--text-md-regular-size);
  color: var(--colors-text-primary);
  font-family: var(--header-h5);
`;
