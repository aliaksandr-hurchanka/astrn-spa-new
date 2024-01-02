import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import { ColStyled, DescriptionStyled, FormRowStyled, FormStyled, SocialStyled, SocialTextStyled } from './styled';
import { ButtonStyled } from '../../../../common/components/button-styled';
import { SVGIcon } from '../../../../common/components/svg-icon';
import EmailIcon from '../../../../assets/icons/email.svg';
import TelegramIcon from '../../../../assets/icons/telegram.svg';
import { HeadingLevel2, HeadingLevel3, RegularTextLevel1 } from '../../../../common/tokens/typography';
import { useWindowSize } from '../../../../common/hooks';

export function Connected() {

  const { isTabletView } = useWindowSize();

  return (
    <Container lgPt='80px' lgPb='80px' pt='40px' pb='40px'>
      <Row rowGap='24px'>
        <Col lg={6} md={3} sm={4}>
          <HeadingLevel2 width='100%' textAlign={isTabletView ? 'left' : 'center'}>
            Let's stay connected
          </HeadingLevel2>
          <DescriptionStyled>
            We are always ready to give you any advice on firmware: explain, tell you, help you to set up your equipment.
          </DescriptionStyled>
          <Row lgMt='120px' mt='24px' rowGap={isTabletView ? '32px' : '0'}>
            <ColStyled lg={6} sm={2}>
              <SocialStyled>
                <SVGIcon type={EmailIcon} sizes={{
                  w: 48,
                  h: 48
                }} />
              </SocialStyled>
              <SocialTextStyled>
                <HeadingLevel3>
                  Email
                </HeadingLevel3>
                <RegularTextLevel1 color='#fff'>
                  info@asteron.io
                </RegularTextLevel1>
              </SocialTextStyled>
            </ColStyled>
            <ColStyled lg={6} sm={2}>
              <SocialStyled>
                <SVGIcon type={TelegramIcon} sizes={{
                  w: 48,
                  h: 48
                }} />
              </SocialStyled>
              <SocialTextStyled>
                <HeadingLevel3>
                  Telegram
                </HeadingLevel3>
                <RegularTextLevel1 color='#fff'>
                  @jonnyfin
                </RegularTextLevel1>
              </SocialTextStyled>
            </ColStyled>
          </Row>
        </Col>
        <Col lg={6} md={5} sm={4}>
          <FormStyled>
            <FormRowStyled>
              <label>Email</label>
              <input type='text' placeholder='Your email...' />
            </FormRowStyled>
            <FormRowStyled>
              <label>Message</label>
              <textarea placeholder='Your message...' />
            </FormRowStyled>
            <ButtonStyled type='large' btnWidth={'100%'}>
              Sent
            </ButtonStyled>
          </FormStyled>
        </Col>
      </Row>
    </Container>
  );
}
