import React from 'react'
import { ColStyled, ResourceNameStyled, ResourceStyled, ResourcesListStyled, ResourcesPageStyled, SubTitleStyled, TitleStyled } from './styled';
import { Col, Container, Row } from '../../common/components/grid';
import { HeadingLevel1, RegularTextLevel3 } from '../../common/tokens/typography';
import { Progress } from './components/Progress';

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
              <ResourceStyled>
                <Row>
                  <Col lg={4}>
                    <ResourceNameStyled>
                      Antminer S19
                    </ResourceNameStyled>
                  </Col>
                  <ColStyled lg={6}>
                    <Progress />
                    <Progress isWater />
                  </ColStyled>
                  <Col lg={2}>

                  </Col>
                </Row>
              </ResourceStyled>
              <ResourceStyled>
                <Row>
                  <Col lg={4}>
                    <ResourceNameStyled>
                      Antminer S19
                    </ResourceNameStyled>
                  </Col>
                  <ColStyled lg={6}>
                    <Progress />
                    <Progress isWater />
                  </ColStyled>
                  <Col lg={2}>

                  </Col>
                </Row>
              </ResourceStyled>
              <ResourceStyled>
                <Row>
                  <Col lg={4}>
                    <ResourceNameStyled>
                      Antminer S19
                    </ResourceNameStyled>
                  </Col>
                  <ColStyled lg={6}>
                    <Progress />
                    <Progress isWater />
                  </ColStyled>
                  <Col lg={2}>

                  </Col>
                </Row>
              </ResourceStyled>
              <ResourceStyled>
                <Row>
                  <Col lg={4}>
                    <ResourceNameStyled>
                      Antminer S19
                    </ResourceNameStyled>
                  </Col>
                  <ColStyled lg={6}>
                    <Progress />
                    <Progress isWater />
                  </ColStyled>
                  <Col lg={2}>

                  </Col>
                </Row>
              </ResourceStyled>
            </ResourcesListStyled>
          </Col>
        </Row>
      </Container>
    </ResourcesPageStyled>
  );
}

export default Resources;