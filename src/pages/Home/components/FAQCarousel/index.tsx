import { Col, Container, Row } from '../../../../common/components/grid';
import { LinkStyled } from '../../../../common/components/link-styled';
import { HeadingLevel3, RegularTextLevel1 } from '../../../../common/tokens/typography';

export function FAQCarousel() {

  return (
    <Container lgPt='80px' lgPb='80px' pb='80px'>
      <Row rowGap='24px'>
        <Col lg={1} />
        <Col lg={4} md={8} sm={4}>
          <HeadingLevel3>
            Is it possible not to overclock the device and leave it at stock values but reduce power consumption?
          </HeadingLevel3>
        </Col>
        <Col lg={6} md={8} sm={4}>
          <RegularTextLevel1>
            Yes, this is one of the main usage modes of our firmware. You can leave the stock value and use the firmware module that provides energy efficiency, or you can adjust the power consumption in manual mode.
          </RegularTextLevel1>
        </Col>
        <Col lg={1} />
      </Row>
      <Row>
        <Col style={{ textAlign: 'center', padding: '32px 0' }}>
          <LinkStyled to='/faq'>
            See all questions
          </LinkStyled>
        </Col>
      </Row>
    </Container>
  );
}
