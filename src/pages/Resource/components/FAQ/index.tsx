import { Col, Container, Row } from "../../../../common/components/grid";
import Accordion from '../../../../common/components/accordion';
import { HeadingLevel2 } from "../../../../common/tokens/typography";

export function FAQ() {
  return (
    <Container>
        <Row lgMt='80px' lgMb='80px' mt='40px' mb='40px'>
          <Col lg={4}>
            <HeadingLevel2 width='100%' textAlign='center'>Frequently asked questions</HeadingLevel2>
          </Col>
          <Col lg={8}>
            <Accordion
              title="How does custom firmware work for a miner?"
              content="Custom firmware is special software that you can install on your mining device and customise it to run better and faster. It can help save energy, protect your device from viruses and maximise speed. To start using custom firmware, you need to download the version for your device model to your computer or select one of the pre-installed configurations. After that, you can adjust settings, voltage levels to achieve optimal results. Although custom firmware can provide significant benefits, it is important to follow the instructions and be careful when changing parameters to avoid possible problems."
            />
            <Accordion
              title="Is there technical support available?"
              content="Custom firmware is special software that you can install on your mining device and customise it to run better and faster. It can help save energy, protect your device from viruses and maximise speed. To start using custom firmware, you need to download the version for your device model to your computer or select one of the pre-installed configurations. After that, you can adjust settings, voltage levels to achieve optimal results. Although custom firmware can provide significant benefits, it is important to follow the instructions and be careful when changing parameters to avoid possible problems."
            />
            <Accordion
              title="How do I go back to factory settings in the firmware?"
              content="Custom firmware is special software that you can install on your mining device and customise it to run better and faster. It can help save energy, protect your device from viruses and maximise speed. To start using custom firmware, you need to download the version for your device model to your computer or select one of the pre-installed configurations. After that, you can adjust settings, voltage levels to achieve optimal results. Although custom firmware can provide significant benefits, it is important to follow the instructions and be careful when changing parameters to avoid possible problems."
            />
            <Accordion
              title="How many per cent is it safe to overclock devices?"
              content="Custom firmware is special software that you can install on your mining device and customise it to run better and faster. It can help save energy, protect your device from viruses and maximise speed. To start using custom firmware, you need to download the version for your device model to your computer or select one of the pre-installed configurations. After that, you can adjust settings, voltage levels to achieve optimal results. Although custom firmware can provide significant benefits, it is important to follow the instructions and be careful when changing parameters to avoid possible problems."
            />
          </Col>
        </Row>
      </Container>
  );
}