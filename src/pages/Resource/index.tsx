import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { find, isEmpty } from 'lodash';
import { Col, Container, Row } from '../../common/components/grid';
import { CalculatorStyled, CharacteristicsStyled, ChipsStyled, ColStyled, NameStyled, PriceSectionTitleStyled, RowStyled, SelectStyled } from './styled';
import { Progress } from '../../components/Progress';
import { Image } from '../../common/components/image';
import ResourceImage from '../../assets/resource.png';

const options = [
  { value: 'lifetime-license', label: 'Lifetime License' },
  { value: 'billed-annually', label: 'Billed Annually' },
  { value: 'billed-monthly', label: 'Billed Monthly' }
]

export function Resource(props: any) {
  console.log(props);

  const { id } = useParams();

  const resource = find(data, ['id', id]);

  if (isEmpty(resource)) return null;

  return (
    <Container>
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
          <Col lg={5}>
            Payment period
            <SelectStyled
              className="basic-single"
              classNamePrefix="select"
              defaultValue={options[2]}
              options={options}
            />
          </Col>
          <Col lg={7}>
            One-off payment:
          </Col>
        </RowStyled>
      </CalculatorStyled>
    </Container>
  );
}
