import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../common/components/grid";


export const HeaderContainerStyled = styled(Container)`
  z-index: 1;
  align-items: center;
  display: flex;
  position: sticky;
  top: 0;
  background-color: #000;
`;

export const MenuItemStyled = styled(NavLink)`
  position: relative;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--colors-text-primary, #FFF);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;








export const IconStyled = styled.img`
  position: absolute;
  top: 0px;
  left: 403px;
  width: 1287px;
  height: 858px;
  object-fit: cover;
`;

export const LogoIconStyled = styled.img`
  position: relative;
  width: 40px;
`;
export const AsteronIconStyled = styled.img`
  position: relative;
  width: 121.5px;
`;
export const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;

export const MenuCategoriesStyled = styled.div`
  position: absolute;
  top: 28px;
  left: 512px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-29xl);
`;
export const Message24Outline = styled.img`
  position: relative;
  width: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const Text1Styled = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
export const ButtonStyled = styled.div`
  position: absolute;
  top: calc(50% - 18px);
  left: 1266px;
  border-radius: var(--br-7xs);
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  gap: var(--gap-7xs);
  font-size: var(--text-sm-regular-size);
  color: var(--palette-gray-grey-800);
  font-family: var(--display-lg-medium);
`;
export const Navigation1Styled = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
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
export const WeAccelerateYourStyled = styled.div`
  position: relative;
  font-size: var(--text-md-regular-size);
  line-height: 24px;
  color: var(--colors-text-secondary);
  display: inline-block;
  width: 513px;
`;
export const Message24Outline1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
export const Text11Styled = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
export const Button1Styled = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  height: 56px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-9xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  font-size: var(--scale-lg-size);
  color: var(--palette-gray-grey-800);
  font-family: var(--display-lg-medium);
`;
export const ContentStyled = styled.div`
  position: absolute;
  top: 196px;
  left: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  font-size: var(--header-h1-size);
  color: var(--colors-primary);
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
export const SectionStyled = styled.div`
  position: absolute;
  top: 296px;
  left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px;
  gap: var(--gap-5xl);
`;
export const Section1Styled = styled.div`
  position: absolute;
  top: 296px;
  left: 931px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px;
  gap: var(--gap-5xl);
`;
export const Section2Styled = styled.div`
  position: absolute;
  top: 612px;
  left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px;
  gap: var(--gap-5xl);
`;
export const Section3Styled = styled.div`
  position: absolute;
  top: 612px;
  left: 931px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px;
  gap: var(--gap-5xl);
`;
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
