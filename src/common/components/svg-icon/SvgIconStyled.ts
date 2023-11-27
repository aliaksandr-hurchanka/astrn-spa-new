import styled, { css } from 'styled-components';

import { colorBlackTransparent50 } from '../../tokens/colors';
import { CORNER_RADIUS } from '../../tokens/cornerRadius';

import { Breakpoint, SizeType, TSvgIconProps } from './types';

// const getWidth = (size: number) => css`
//   width: ${size}px;
// `;

// const getHeight = (size: number) => css`
//   height: ${size}px;
// `;

// const getSimpleSize = (size: SizeType) => css`
//   ${getWidth(size)}
//   ${getHeight(size)}
// `;

// // eslint-disable-next-line no-unused-vars
// const getSizes = ({
//   size,
//   sizes,
// }: {
//   size?: SizeType;
//   sizes?: { [K in Breakpoint]?: SizeType };
// }) => {
//   if (size) {
//     return css`
//       ${getSimpleSize(size)}
//     `;
//   }

//   if (sizes) {
//     // TODO - Need implement more complex functionality for case with 'sizes' options
//     return css``;
//   }

//   return css``;
// };

export const SVGIconStyled = styled.span<TSvgIconProps>`
  display: flex;

  ${({ order }) => order && `order: ${order};`}
  ${({ iconRotate }) => iconRotate && `transform: rotate(${iconRotate}deg);`};
  ${({ isButton }) => isButton && 'cursor: pointer;'}

  ${({ sizes }) => sizes && css`
    width: ${sizes.w};
    height: ${sizes.h};
  `}

  & path {
    ${({ pathFill }) => pathFill && `fill: ${pathFill};`}
    ${({ stroke }) => stroke && `stroke: ${stroke};`}
  }

  ${({ rectFill }) =>
    rectFill &&
    `
    & > svg > rect {
      fill: ${rectFill};
    }
  `}

  ${({ isHoverEffect }) =>
    isHoverEffect &&
    css`
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${colorBlackTransparent50};
          border-radius: ${CORNER_RADIUS.l};
        }
      }
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${colorBlackTransparent50};
      border-radius: ${CORNER_RADIUS.circle};
    `}
`;
