import { ButtonStyled } from '../../common/components/button-styled';
import { Row } from '../../common/components/grid';
import { Image } from '../../common/components/image';
import { HeadingLevel3, RegularTextLevel1 } from '../../common/tokens/typography';
import { AdminPanelBannerStyled, ColDeviceStyled, ColStyled, ContainerStyled, ImageStyled } from './styled';
import LargeTablet from '../../assets/admin-panel-section/large-tablet.png';
import { LeftShadowStyled, RightShadowStyled } from '../AdministratorPanel/styled';
import { useWindowSize } from '../../common/hooks';

export function AdminPanelBanner() {

  const { isMobileView, isTabletView } = useWindowSize();

  return (
    <AdminPanelBannerStyled>
      {!isMobileView && !isTabletView && <LeftShadowStyled />}
      <ContainerStyled>
        <Row>
          <ColStyled lg={5} md={3} sm={4}>
            <HeadingLevel3 color='#FFB22E'>
              Administrator panel app
            </HeadingLevel3>
            <RegularTextLevel1 color='#FFFFFF'>
              The firmware interface is simple and easy to use. Always stay connected to your farm wherever you are. You can see how the administration panel works.
            </RegularTextLevel1>
            <ButtonStyled type={isMobileView ? 'small' : 'large'}>
              Try Demo App
            </ButtonStyled>
          </ColStyled>
          <ColDeviceStyled lg={7} md={5} sm={4}>
            <ImageStyled>
              <Image src={LargeTablet} />
            </ImageStyled>
          </ColDeviceStyled>
        </Row>
      </ContainerStyled>
      <RightShadowStyled />
    </AdminPanelBannerStyled>
  )
}
