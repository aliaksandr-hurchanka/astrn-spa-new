import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import { ColStyled, DescriptionStyled, FormRowStyled, FormStyled, TitleStyled } from './styled';
import { ButtonStyled } from '../../../../common/components/button-styled';
import { SVGIcon } from '../../../../common/components/svg-icon';
import EmailIcon from '../../../../assets/icons/email.svg';
import TelegramIcon from '../../../../assets/icons/telegram.svg';
import { HeadingLevel3, RegularTextLevel1 } from '../../../../common/tokens/typography';

export function Connected() {
  return (
    <Container lgPt='80px' lgPb='80px'>
      <Row>
        <Col lg={6}>
          <TitleStyled>
            Let's stay connected
          </TitleStyled>
          <DescriptionStyled>
            We are always ready to give you any advice on firmware: explain, tell you, help you to set up your equipment.
          </DescriptionStyled>
          <Row lgMt='220px'>
            <ColStyled lg={6}>
              <SVGIcon type={EmailIcon} sizes={{
                w: 48,
                h: 48
              }} />
              <HeadingLevel3>
                Email
              </HeadingLevel3>
              <RegularTextLevel1 color='#fff'>
                info@asteron.io
              </RegularTextLevel1>
            </ColStyled>
            <ColStyled lg={6}>
              <SVGIcon type={TelegramIcon} sizes={{
                w: 48,
                h: 48
              }} />
              <HeadingLevel3>
                Telegram
              </HeadingLevel3>
              <RegularTextLevel1 color='#fff'>
                @jonnyfin
              </RegularTextLevel1>
            </ColStyled>
          </Row>
        </Col>
        <Col lg={6}>
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
