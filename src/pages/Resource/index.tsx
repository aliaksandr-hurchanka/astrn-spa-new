import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { find, isEmpty } from 'lodash';
import { Col, Container, Row } from '../../common/components/grid';
import { CalculatorStyled, CharacteristicsStyled, ChipsStyled, ColStyled, CurrencyStyled, InputStyled, LabelStyled, MethodStyled, MinusButtonStyled, NameStyled, PaymentMethodsStyled, PlusButtonStyled, PriceColStyled, PriceLabelStyled, PriceSectionTitleStyled, PriceStyled, RowStyled, SelectStyled } from './styled';
import { Progress } from '../../components/Progress';
import { Image } from '../../common/components/image';
import ResourceImage from '../../assets/resource.png';
import Minus from '../../assets/icons/minus.svg';
import Plus from '../../assets/icons/plus.svg';
import BTCIcon from '../../assets/icons/btc.png';
import USDTIcon from '../../assets/icons/usdt.png'
import { SVGIcon } from '../../common/components/svg-icon';
import { DownloadSection } from './components/DownloadSection';
import { AccordionMainTitleStyled } from '../../common/components/accordion/styled';
import Accordion from '../../common/components/accordion';
import { Connected } from './components/Connected';

const options = [
  { value: 'lifetime-license', label: 'Lifetime License' },
  { value: 'billed-annually', label: 'Billed Annually' },
  { value: 'billed-monthly', label: 'Billed Monthly' }
]

export function Resource() {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const resource = find(data, ['id', id]);

  if (isEmpty(resource)) return null;

  const handleClick = (nextCount: number) => {
    if (nextCount < 1) return;

    setCount(nextCount);
  }

  return (
    <>
      <Container lgPb='80px'>
        <Row lgMt='80px'>
          <Col lg={7}>
            <NameStyled>
              {resource?.name}
              {resource?.countChips && <ChipsStyled>
                {resource?.countChips} chips
              </ChipsStyled>}
              <span>{resource?.variants}Th</span>
            </NameStyled>
            <CharacteristicsStyled>
              {resource?.baseValueCooler && <Progress baseValue={resource?.baseValueCooler} boostValue={resource?.boostValueCooler} />}
            </CharacteristicsStyled>
            <CharacteristicsStyled>
              {resource?.baseValueWater && <Progress baseValue={resource?.baseValueWater} boostValue={resource?.boostValueWater} isWater />}
            </CharacteristicsStyled>
          </Col>
          <ColStyled lg={5} justifyContent='center'>
            <Image src={ResourceImage} width={396} height={344} />
          </ColStyled>
        </Row>
        <PriceSectionTitleStyled>
          To find out the price, select the payment period and the required number of devices
        </PriceSectionTitleStyled>
        <CalculatorStyled>
          <RowStyled>
            <Col lg={2}>
              <LabelStyled>
                Payment period
              </LabelStyled>
              <SelectStyled
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[2]}
                options={options}
              />
            </Col>
            <Col lg={2}>
              <LabelStyled>
                Number of devices
              </LabelStyled>
              <MinusButtonStyled onClick={() => handleClick(count - 1)}>
                <SVGIcon type={Minus} sizes={{
                  w: 24,
                  h: 24
                }} />
              </MinusButtonStyled>
              <InputStyled type="text" value={count} onChange={({ target }) => handleClick(Number(target.value))} />
              <PlusButtonStyled onClick={() => handleClick(count + 1)}>
                <SVGIcon type={Plus} sizes={{
                    w: 24,
                    h: 24
                  }} />
              </PlusButtonStyled>
            </Col>
            <PriceColStyled lg={8}>
              <PriceLabelStyled>One-off payment:</PriceLabelStyled>
              <PriceStyled>
                <CurrencyStyled>$</CurrencyStyled>{Number(resource?.price) * count}
              </PriceStyled>
            </PriceColStyled>
          </RowStyled>
        </CalculatorStyled>
        <PaymentMethodsStyled>
          We accept payment methods:
          <MethodStyled color="#FFC107"><Image src={BTCIcon} width={36} height={36} /> BTC</MethodStyled>
          <MethodStyled color="#26A69A"><Image src={USDTIcon} width={36} height={36} /> USDT TRC-20</MethodStyled>
        </PaymentMethodsStyled>
      </Container>
      <DownloadSection />
      <Container>
        <Row lgMt='80px' lgMb='80px'>
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
      </Container>
      <Connected />
    </>
  );
}
