import React from 'react';
import { Col, Container, Row } from '../../../../common/components/grid';
import { DownloadFileStyled, LeftColStyled, RightColStyled, TitleStyled } from './styled';
import { SubTitleStyled } from './styled';
import { SVGIcon } from '../../../../common/components/svg-icon';
import ArrowRight from '../../../../assets/icons/arrow-right.svg';

export function DownloadSection() {
  return (
    <Container>
        <Row>
          <Col>
            <TitleStyled>Download</TitleStyled>
            <SubTitleStyled>Firmware for overclocking Antminer S19 (88 Chips)</SubTitleStyled>
          </Col>
        </Row>
        <DownloadFileStyled lgMb='16px'>
          <LeftColStyled lg={6}>Instruction Aml_v1.1</LeftColStyled>
          <RightColStyled lg={6}>Download
            <SVGIcon sizes={{
              w: 24,
              h: 28
            }} type={ArrowRight} /></RightColStyled>
        </DownloadFileStyled>
        <DownloadFileStyled>
          <LeftColStyled lg={6}>Instruction Aml_v1.1</LeftColStyled>
          <RightColStyled lg={6}>Download
            <SVGIcon sizes={{
              w: 24,
              h: 28
            }} type={ArrowRight} /></RightColStyled>
        </DownloadFileStyled>
        <DownloadFileStyled>
          <LeftColStyled lg={6}>Instruction Aml_v1.1</LeftColStyled>
          <RightColStyled lg={6}>Download
            <SVGIcon sizes={{
              w: 24,
              h: 28
            }} type={ArrowRight} /></RightColStyled>
        </DownloadFileStyled>
    </Container>
  );
}
