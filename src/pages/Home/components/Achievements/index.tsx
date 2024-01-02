import { Col, Row } from '../../../../common/components/grid';
import { CenterColStyled, ContainerStyled, CountStyled, CountTextStyled, ParallaxBannerStyled, RowStyled, TitleStyled } from './styled';
import { BannerLayer } from 'react-scroll-parallax';

export function Achievements() {

  // --------- TEXT -----------
  const layer1: BannerLayer = {
    opacity: [0.3, 4.0],
    translateY: [5, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <RowStyled lgMt='70px' id='achievements' mdMb='60px' mb='0px'>
          <Col lg={1} />
          <CenterColStyled lg={10}>
            <TitleStyled>
              For 5 years we've been helping customers earn more, providing technical support and releasing updates — each time making the product even better.
            </TitleStyled>
          </CenterColStyled>
          <Col lg={1} />
        </RowStyled>
        <Row rowGap='26px'>
          <CenterColStyled lg={4} md={8} sm={4}>
            <CountStyled>235 000</CountStyled>
            <CountTextStyled>Projects completed</CountTextStyled>
          </CenterColStyled>
          <CenterColStyled lg={4} md={8} sm={4}>
            <CountStyled>+50 000</CountStyled>
            <CountTextStyled>Hours Saved Annually</CountTextStyled>
          </CenterColStyled>
          <CenterColStyled lg={4} md={8} sm={4}>
            <CountStyled>3 500</CountStyled>
            <CountTextStyled>Unique Users</CountTextStyled>
          </CenterColStyled>
        </Row>
      </>
    )
  };

  return (
    <ContainerStyled pb='60px' mdPb='60px' lgPb='120px'>
      <ParallaxBannerStyled
          style={{ aspectRatio: '1 / 2' }}
          layers={[layer1]}
        />
    </ContainerStyled>
  );
}
