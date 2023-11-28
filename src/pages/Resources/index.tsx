import React from 'react'
import { ChipsLabelStyled, ColStyled, ResourceNameStyled, ResourceStyled, ResourcesListStyled, ResourcesPageStyled, SubTitleStyled, TitleStyled } from './styled';
import { Col, Container, Row } from '../../common/components/grid';
import { HeadingLevel1, RegularTextLevel3 } from '../../common/tokens/typography';
import { Progress } from './components/Progress';
import resources from './data/data.json';

function Resources() {
  return (
    <ResourcesPageStyled>
      <Container width='100%'>
        <Row>
          <Col>
            <TitleStyled>
              <HeadingLevel1 color='#fff'>All supported hardware</HeadingLevel1>
            </TitleStyled>
            <SubTitleStyled>
              <RegularTextLevel3 color='#f0f0f0'>
                Pricing that scales with your business immediately.
              </RegularTextLevel3>
            </SubTitleStyled>
            <ResourcesListStyled>
              {resources.map(({ name, countChips, variants, baseValueCooler, boostValueCooler, baseValueWater, boostValueWater }) => {
                return (
                  <ResourceStyled>
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
                      <Col lg={2}>

                      </Col>
                    </Row>
                  </ResourceStyled>
                );
              })}
            </ResourcesListStyled>
          </Col>
        </Row>
      </Container>
    </ResourcesPageStyled>
  );
}

export default Resources;
