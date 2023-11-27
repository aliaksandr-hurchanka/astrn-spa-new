import React from 'react';
import { ArrowIconStyled, ArrowLine, ArrowLineContainerStyled, CountStyled, ProgressStyled, IconStyled, BoostStyled } from './styled';
import Arrow from './Arrow.svg';
import ArrowBlue from './ArrowBlue.svg';
import Cooler from './Cooler.svg';
import Water from './Water.svg';

export const Progress = (props: { isWater?: boolean; }) => {
  return (
    <>
      <ProgressStyled>
        <ArrowLineContainerStyled><ArrowLine isWater={props.isWater} /><ArrowIconStyled type={props.isWater ? ArrowBlue : Arrow} sizes={{ w: 16, h: 65 }} /></ArrowLineContainerStyled>
        <CountStyled><IconStyled type={props.isWater ? Water : Cooler} sizes={{ w: 37, h: 37 }} />44<span>Th/s</span></CountStyled>
      </ProgressStyled>
      <BoostStyled>130<span>Th/s</span></BoostStyled>
    </>
  );
}
