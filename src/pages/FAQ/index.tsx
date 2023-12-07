import Accordion from "../../common/components/accordion";
import { Col, Container, Row } from "../../common/components/grid";
import { SupportedHardware } from "../Home/components/SupportedHardware";
import { AddQuestion } from "./components/AddQuestion";
import { FAQSubtitleStyled, FAQTitleStyled } from "./styled";

export function FAQ() {
  return (
    <Container>
      <Row lgMb="80px">
        <Col>
          <FAQTitleStyled>
            Frequently Asked Questions
          </FAQTitleStyled>
          <FAQSubtitleStyled>
            On this page we have tried to collect answers to the most frequent questions
          </FAQSubtitleStyled>
        </Col>
      </Row>
      <Row>
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
      <SupportedHardware />
    </Container>
  );
};
