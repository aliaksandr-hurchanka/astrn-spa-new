import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { find, isEmpty, max } from 'lodash';
import { Col, Container, Row } from '@astrn/common/components/grid';
import { CalculatorStyled, CharacteristicsStyled, ChipsStyled, ColStyled, CurrencyStyled, DiscountStyled, ImageStyled, InputStyled, LabelStyled, MethodStyled, MinusButtonStyled, NameStyled, PaymentMethodsStyled, PlusButtonStyled, PriceColStyled, PriceLabelStyled, PriceSectionTitleStyled, PriceStyled, RowStyled, SelectStyled } from './styled';
import { Progress } from '@astrn/components/Progress';
import { Image } from '@astrn/common/components/image';
import ResourceImage from '@astrn/assets/resource.png';
import Minus from '@astrn/assets/icons/minus.svg';
import Plus from '@astrn/assets/icons/plus.svg';
import BTCIcon from '@astrn/assets/icons/btc.png';
import USDTIcon from '@astrn/assets/icons/usdt.png'
import { SVGIcon } from '@astrn/common/components/svg-icon';
import { DownloadSection } from './components/DownloadSection';
import { Connected } from './components/Connected';
import { AdministratorPanel } from '@astrn/components/AdministratorPanel';
import { useWindowSize } from '@astrn/common/hooks';
import { FAQ } from './components/FAQ';
import { Breadcrumbs } from './components/Breadcrumbs';

const options = [
  { value: 'lifetime-license', label: 'Lifetime License' },
  { value: 'billed-annually', label: 'Billed Annually' },
  { value: 'billed-monthly', label: 'Billed Monthly' }
]

export function Resource() {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const { isMobileView } = useWindowSize();

  const resource = find(data, ['id', id]);

  if (isEmpty(resource)) return null;

  const handleClick = (nextCount: number) => {
    if (nextCount < 1) return;

    setCount(nextCount);
  }

  return (
    <>
      <Container lgPb='80px'>
        <Row>
          <Col lg={6}>
            <Breadcrumbs title={resource?.name} />
          </Col>
        </Row>
        <Row>
          <Col lg={7} order={isMobileView ? 2 : 1}>
            <NameStyled>
              {resource?.name}
              {resource?.countChips && <ChipsStyled>
                {resource?.countChips} chips
              </ChipsStyled>}
              <span>{resource?.variants}Th</span>
            </NameStyled>
            <CharacteristicsStyled>
              {resource?.baseValueCooler
                && <Progress
                baseValue={resource?.baseValueCooler}
                boostValue={resource?.boostValueCooler}
                maxValue={
                  max([Number(resource?.boostValueCooler), Number(resource?.boostValueWater)])
                }
              />}
            </CharacteristicsStyled>
            <CharacteristicsStyled>
              {resource?.baseValueWater
                && <Progress
                  baseValue={resource?.baseValueWater}
                  boostValue={resource?.boostValueWater}
                  maxValue={
                    max([Number(resource?.boostValueCooler), Number(resource?.boostValueWater)])
                  }
                  isWater
                />
              }
            </CharacteristicsStyled>
          </Col>
          <ColStyled lg={5} justifyContent='center' order={isMobileView ? 1 : 2}>
            <ImageStyled src={ResourceImage} width={396} height={344} />
          </ColStyled>
        </Row>
        <PriceSectionTitleStyled>
          To find out the price, select the payment period and the required number of devices
        </PriceSectionTitleStyled>
        <CalculatorStyled>
          <RowStyled rowGap='16px'>
            <Col lg={2} md={8} sm={4}>
              <LabelStyled>
                Payment period
              </LabelStyled>
              <SelectStyled
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[2]}
                options={options}
                // @ts-ignore
                autoComplete="off"
                inputMode="none"
              />
            </Col>
            <Col lg={2} md={8} sm={4}>
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
            <PriceColStyled lg={8} md={8} sm={4}>
              {resource?.discount && <DiscountStyled><CurrencyStyled>$</CurrencyStyled>{Number(resource?.price) * count}</DiscountStyled>}
              <PriceLabelStyled>One-off payment:</PriceLabelStyled>
              <PriceStyled>
                <CurrencyStyled>$</CurrencyStyled>{(Number(resource?.price) * count) - Number(resource?.discount || 0)}
              </PriceStyled>
            </PriceColStyled>
          </RowStyled>
        </CalculatorStyled>
        <PaymentMethodsStyled>
          <p>We accept payment methods:</p>
          <MethodStyled color="#FFC107"><Image src={BTCIcon} width={36} height={36} /> BTC</MethodStyled>
          <MethodStyled color="#26A69A"><Image src={USDTIcon} width={36} height={36} /> USDT TRC-20</MethodStyled>
        </PaymentMethodsStyled>
      </Container>
      <DownloadSection />
      <AdministratorPanel />
      <FAQ />
      <Connected />
    </>
  );
}
