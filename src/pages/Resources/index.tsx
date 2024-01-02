import React from 'react'
import { ContainerStyled, ResourcesPageStyled, RowStyled, SubTitleStyled, TitleStyled } from './styled';
import { Col, Row } from '../../common/components/grid';
import { HeadingLevel1, RegularTextLevel3 } from '../../common/tokens/typography';
import resources from '../../data/data.json';
import Accordion from '../../common/components/accordion';
import { AccordionMainTitleStyled } from '../../common/components/accordion/styled';
import { useWindowSize } from '../../common/hooks';
import { Image } from '../../common/components/image';
import Antminer from '../../assets/resource/antminer.png';
import { ResourcesList } from '../../components/Resources';

function Resources() {
  const { isMobileView } = useWindowSize();
  
  return (
    <ResourcesPageStyled>
      <ContainerStyled width='100%'>
        <RowStyled>
          <Col lg={7} md={4} sm={4} smCustomMargin='0 0 40px' order={isMobileView ? 2 : 1}>
            <TitleStyled>
              <HeadingLevel1 color='#fff'>All supported hardware</HeadingLevel1>
            </TitleStyled>
            <SubTitleStyled>
              <RegularTextLevel3 color='#f0f0f0'>
                On this page you will find a list of supported equipment. <br />Select the one that suits you for more detailed information
              </RegularTextLevel3>
            </SubTitleStyled>
          </Col>
          <Col lg={5} md={4} order={isMobileView ? 1 : 2}>
            <Image src={Antminer} />
          </Col>
        </RowStyled>
        <Row lgMb='80px'>
          <Col>
            <ResourcesList resources={resources} />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <AccordionMainTitleStyled>Frequently asked questions</AccordionMainTitleStyled>
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
      </ContainerStyled>
    </ResourcesPageStyled>
  );
}

export default Resources;
