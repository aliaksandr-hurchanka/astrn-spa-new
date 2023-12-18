import Accordion from "../../common/components/accordion";
import { ButtonStyled } from "../../common/components/button-styled";
import { Col, Container, Row } from "../../common/components/grid";
import { useWindowSize } from "../../common/hooks";
import { HeadingLevel2, RegularTextLevel1 } from "../../common/tokens/typography";
import { ResourcesList } from "../../components/Resources";
import resources from '../../data/home-data.json'
import { AddQuestion } from "./components/AddQuestion";
import { ColStyled, FAQSubtitleStyled, FAQTitleStyled } from "./styled";

export function FAQ() {

  const { isMobileView } = useWindowSize();

  return (
    <Container>
      <Row lgMb="80px" mdMb="40px" mb="40px">
        <Col>
          <FAQTitleStyled>
            Frequently Asked Questions
          </FAQTitleStyled>
          <FAQSubtitleStyled>
            On this page we have tried to collect answers to the most frequent questions
          </FAQSubtitleStyled>
        </Col>
      </Row>
      <Row >
        <Col lg={2} />
        <Col lg={8}>
          <Accordion
            theme="faq"
            title="Is it safe?"
            content="It all depends on the condition of your equipment and factory assembly. When we squeeze all the possibilities out of the device, if there was something wrong with the hardware, it can burn out. But, in our experience, if everything is good with the hardware, the firmware can work for more than 2 years without interruption.
            The main breakdowns of the device are power supply problems, which can be easily fixed either by you or your engineers, because they are typical and common everywhere.
            If you have bad hardware, please do not put our firmware or any firmware at all.
            We are not responsible for the safety of your device - unfortunately, if we were to check and flash your equipment ourselves, by hand, we would be able to understand what condition it is in before flashing and whether we can flash the device without any consequences for it. But, we provide a different distribution model, which does not involve sending us the device or any other direct interaction of our specialists with your hardware. Therefore, we cannot provide any guarantee."
          />
          <Accordion
            theme="faq"
            title="How does custom firmware work for a miner?"
            content="It all depends on the condition of your equipment and factory assembly. When we squeeze all the possibilities out of the device, if there was something wrong with the hardware, it can burn out. But, in our experience, if everything is good with the hardware, the firmware can work for more than 2 years without interruption."
          />
          <Accordion
            theme="faq"
            title="Does the manufacturer's warranty on the equipment disappear after the firmware is installed?"
            content="It all depends on the condition of your equipment and factory assembly. When we squeeze all the possibilities out of the device, if there was something wrong with the hardware, it can burn out. But, in our experience, if everything is good with the hardware, the firmware can work for more than 2 years without interruption."
          />
        </Col>
        <Col lg={2} />
      </Row>
      <AddQuestion />
      <Row lgMb="80px" mdMb="40px" mb="40px" mt="40px">
        <Col>
          <HeadingLevel2 textAlign="center">
            SUPPORTED HARDWARE UPGRADE
          </HeadingLevel2>
          <RegularTextLevel1 color="#fff" textAlign="center">
            Pricing that scales with your business immediately.
          </RegularTextLevel1>
        </Col>
      </Row>
      <Row mb="40px">
        <Col>
          <ResourcesList resources={resources} />
        </Col>
      </Row>
      <Row mb="80px">
        <ColStyled lg={12}>
          <ButtonStyled type={isMobileView ? 'small' : 'large'} btnWidth={isMobileView ? '100%' : 'auto'}>
            See all support devices
          </ButtonStyled>
        </ColStyled>
      </Row>
    </Container>
  );
};
