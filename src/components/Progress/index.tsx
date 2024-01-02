import React from 'react';
import { ArrowIconStyled, ArrowLine, ArrowLineContainerStyled, CountStyled, ProgressStyled, IconStyled, BoostStyled } from './styled';
import Arrow from './Arrow.svg';
import ArrowBlue from './ArrowBlue.svg';
import Cooler from './Cooler.svg';
import Water from './Water.svg';

export const Progress = (props: {
  baseValue: string;
  boostValue: string;
  isWater?: boolean;
  maxValue?: number;
}) => {
  const { baseValue, boostValue, isWater, maxValue } = props;

  const getLineWidth = (boostValue: number) => {
    if (maxValue) {
      return boostValue * 100 / maxValue;
    }

    return boostValue;
  }

  return (
    <>
      <ProgressStyled>
        <ArrowLineContainerStyled><ArrowLine lineWidth={getLineWidth(Number(boostValue))} isWater={isWater} /><ArrowIconStyled type={isWater ? ArrowBlue : Arrow} sizes={{ w: 16, h: 65 }} /></ArrowLineContainerStyled>
        <CountStyled><IconStyled type={isWater ? Water : Cooler} sizes={{ w: 37, h: 37 }} />{baseValue}<span>Th/s</span></CountStyled>
      </ProgressStyled>
      <BoostStyled>{boostValue}<span>Th/s</span></BoostStyled>
    </>
  );
}
