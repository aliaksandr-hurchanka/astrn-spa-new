import React from 'react';
import { Progress } from '../../../../components/Progress';
import { Col, Container, Row } from '../../../../common/components/grid';
import { ColStyled, DetailsButtonStyled, LinkStyled, ResourceNameStyled, ResourceStyled, ResourcesListStyled } from '../../../Resources/styled';
import resources from '../../../../data/home-data.json';
import { ChipsLabelStyled } from '../../../../common/components/chips-label';
import { ButtonColStyled, ButtonLinkStyled, SubTitleStyled, TitleStyled } from './styled';

export function SupportedHardware() {
  return (
    <Container>
      <Row>
        <Col>
          <TitleStyled>
            SUPPORTED HARDWARE UPGRADE
          </TitleStyled>
          <SubTitleStyled>
            Pricing that scales with your business immediately.
          </SubTitleStyled>
        </Col>
      </Row>
      <Row>
          <Col>
            <ResourcesListStyled>
              {resources.map(({ id, name, countChips, variants, baseValueCooler, boostValueCooler, baseValueWater, boostValueWater }) => {
                return (
                  <ResourceStyled>
                    <LinkStyled to={`/resources/${id}`}>
                      <Row>
                        <Col lg={4}>
                          <ResourceNameStyled>
                            {name}
                            {countChips && <ChipsLabelStyled>
                              {countChips} chips
                            </ChipsLabelStyled>}
                            <span>{variants}Th</span>
                          </ResourceNameStyled>
                        </Col>
                        <ColStyled lg={3}>
                          {baseValueCooler && <Progress baseValue={baseValueCooler} boostValue={boostValueCooler} />}
                        </ColStyled>
                        <ColStyled lg={3}>
                          {baseValueWater && <Progress baseValue={baseValueWater} boostValue={boostValueWater} isWater />}
                        </ColStyled>
                        <ColStyled lg={2} alignItems='center' justifyContent='flex-end'>
                          <DetailsButtonStyled>
                            See details
                          </DetailsButtonStyled>
                        </ColStyled>
                      </Row>
                    </LinkStyled>
                  </ResourceStyled>
                );
              })}
            </ResourcesListStyled>
          </Col>
        </Row>
        <Row lgMt='24px' lgMb='80px'>
          <ButtonColStyled>
              <ButtonLinkStyled to="/resources">
                See all support devices
              </ButtonLinkStyled>
          </ButtonColStyled>
        </Row>
    </Container>
  );
}