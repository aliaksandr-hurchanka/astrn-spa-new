import React from 'react';
import { Container, Row } from '../../common/components/grid';
import { HeadingLevel2, RegularTextLevel1 } from '../../common/tokens/typography';
import { AdministratorPanelStyled, LeftColStyled, RightColStyled, LeftShadowStyled, RightShadowStyled, ImageStyled } from './styled';
import Tablet from '../../assets/admin-panel-section/tablet.png';
import { ButtonStyled } from '../../common/components/button-styled';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../common/hooks';

export function AdministratorPanel() {

  const { isMobileView, isTabletView } = useWindowSize();

  return (
    <AdministratorPanelStyled>
      {/* {!isMobileView && !isTabletView && <LeftShadowStyled />} */}
      <Container height='448px'>
        <Row mb='30px' mt='30px'>
          <LeftColStyled lg={6} md={4} sm={4} order={isMobileView ? 2 : 1}>
            {!isMobileView && <HeadingLevel2 color='#FFB22E' width='100%' textAlign='center'>
              Administrator panel app
            </HeadingLevel2>}
            <RegularTextLevel1 color='#fff'>
              The firmware interface is simple and easy to use. Always stay connected to your farm wherever you are. You can see how the administration panel works.
            </RegularTextLevel1>
            <ButtonStyled type='large' btnWidth='auto'>
              <Link to="https://demo.breakhash.com/#/main" target='blank'>
                Try Demo App
              </Link>
            </ButtonStyled>
          </LeftColStyled>
          <RightColStyled lg={6} md={4} sm={4} order={isMobileView ? 1 : 2}>
            {isMobileView && <HeadingLevel2 color='#FFB22E' width='100%' textAlign='center'>
              Administrator panel app
            </HeadingLevel2>}
            <ImageStyled src={Tablet} />
          </RightColStyled>
        </Row>
      </Container>
      <RightShadowStyled />
    </AdministratorPanelStyled>
  );
}
