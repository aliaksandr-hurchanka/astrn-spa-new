import isEmpty from 'lodash/isEmpty';
import styled, { css, keyframes } from 'styled-components';

import { ImageSrcSetProps } from '../types/images';

import { ADAPTIVE } from '../tokens/screen';

import { Font, Weight } from './types';

/**
 * @param font - font family - 'Montserrat' or 'Poppins'
 * @param weight - sets the font style (700, 600, 500 ...)
 * @param size - sets the size of the font (16, 20, 24 ...)
 * @param lineHeight - sets the line height
 */
export function getTextStyles(
  font: Font | null,
  weight: Weight | null,
  size: number | null,
  lineHeight: number | null,
): any {
  return css`
    ${font &&
    `
      font-family: ${font};
      font-style: normal;
    `}
    ${weight && `font-weight: ${weight};`}
    ${size && `font-size: ${size}px;`}
    ${lineHeight && `line-height: ${lineHeight}px;`}
  `;
}

export const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

/**
 *
 * @param sm prop as a breakpoint - for define all styles of mobile view
 * @param md prop as a breakpoint - for define all styles of tablet view
 * @param lg prop as a breakpoint - for define all styles of desktop view
 * @param xlg prop as a breakpoint - for define all styles of large desktop view
 *
 * @note the style property as usual defining through JS, following such principle CSSStyleDeclaration
 * more information about some rule here -> https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
 *
 * @returns string
 */
export const getAdaptiveStyles = ({
  sm = null,
  md = null,
  lg = null,
  xlg = null,
}: {
  sm?: Record<string, string> | null;
  md?: Record<string, string> | null;
  lg?: Record<string, string> | null;
  xlg?: Record<string, string> | null;
}) => css`
  ${sm && {
    ...sm,
  }}

  ${md && ADAPTIVE.minWidth.tablet} {
    ${{
      ...md,
    }}
  }

  ${lg && ADAPTIVE.minWidth.desktop} {
    ${{
      ...lg,
    }}
  }

  ${xlg && ADAPTIVE.minWidth.desktopLg} {
    ${{
      ...xlg,
    }}
  }
`;

/**
 * @param index number | current active index element
 * @param isRightToLeft | boolean
 * @param k (Optional param; default value = 0) | Coefficient for add Indent / gap into calculating value
 * @returns style string
 */
export const buildTransformBehaviors = ({
  index = 0,
  isRightToLeft,
  k = 0,
}: {
  index: number;
  isRightToLeft: boolean;
  k?: number;
}): string | number =>
  isRightToLeft
    ? index && `translateX(${100 * index + k}%)`
    : index && `translateX(-${100 * index + k}%)`;

/**
 * Builder for forming 'margins' and 'paddings' with the same indents
 */
export function buildSpecificIndent(indent: string) {
  return css`
    margin-left: -${indent};
    margin-right: -${indent};
    padding-left: ${indent};
    padding-right: ${indent};
  `;
}

/**
 * The common snippet style code for reusing.
 * Description: Cutting line of text and adding three dots in the end of line
 */
export const ellipsisEndingLine = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/**
 * Common Animation effect with appears element
 */
export const visibleAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const alertVisibilityEffectStyled = css`
  animation-name: ${visibleAnimation};
  animation-duration: 0.5s;
`;

export function transformSrcSetToCss(srcSet?: ImageSrcSetProps[], img?: string, props?: string) {
  const imageProps = `${(props && `${props}, `) || ''}`;
  if (isEmpty(srcSet)) {
    return css`
      background-image: ${imageProps} url(${img || ''});
    `;
  }

  return css`
    ${srcSet
      ?.map(
        (set) => `
    @media only screen and ${set?.media} {
      background-image: ${imageProps} url(${set?.src});
    }`,
      )
      .reverse()
      .join('\n')}
  `;
}
