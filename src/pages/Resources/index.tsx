import React from 'react'
import { ColStyled, LinkStyled, ResourceNameStyled, ResourceStyled, ResourcesListStyled, ResourcesPageStyled, SubTitleStyled, TitleStyled } from './styled';
import { Col, Container, Row } from '../../common/components/grid';
import { HeadingLevel1, RegularTextLevel3 } from '../../common/tokens/typography';

import resources from '../../data/data.json';
import { ChipsLabelStyled } from '../../common/components/chips-label';
import { Progress } from '../../components/Progress';

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
              {resources.map(({ id, name, countChips, variants, baseValueCooler, boostValueCooler, baseValueWater, boostValueWater }) => {
                return (
                  <ResourceStyled>
                    <LinkStyled to={id}>
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
                    </LinkStyled>
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
