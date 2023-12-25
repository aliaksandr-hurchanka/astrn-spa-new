import React, { useEffect } from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import { CenterColStyled, ContainerStyled, CountStyled, CountTextStyled, RowStyled, TitleStyled } from './styled';

export function Achievements() {

  useEffect(() => {

    const focusTag = document.querySelectorAll('#achievements');

    const observer = new IntersectionObserver(
      (entries, options) => {        
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        }
      },
      { threshold: 0.1, rootMargin: "1%" }
    );

    focusTag.forEach((el) => observer.observe(el));
  }, []);

  return (
    <ContainerStyled mdPb='60px' lgPb='120px'>
      <RowStyled lgMt='70px' id='achievements' mdMb='60px' mb='0px'>
        <Col lg={1} />
        <CenterColStyled lg={10}>
          <TitleStyled>
            For 5 years we've been helping customers earn more, providing technical support and releasing updates — each time making the product even better.
          </TitleStyled>
        </CenterColStyled>
        <Col lg={1} />
      </RowStyled>
      <Row rowGap='26px'>
        <CenterColStyled lg={4} md={8}>
          <CountStyled>235 000</CountStyled>
          <CountTextStyled>Projects completed</CountTextStyled>
        </CenterColStyled>
        <CenterColStyled lg={4} md={8}>
          <CountStyled>+50 000</CountStyled>
          <CountTextStyled>Hours Saved Annually</CountTextStyled>
        </CenterColStyled>
        <CenterColStyled lg={4} md={8}>
          <CountStyled>3 500</CountStyled>
          <CountTextStyled>Unique Users</CountTextStyled>
        </CenterColStyled>
      </Row>
    </ContainerStyled>
  );
}
