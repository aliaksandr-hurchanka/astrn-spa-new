// Options for attr 'target'
import { TextVariant, VariantName } from './types';

export const SELF = '_self';
export const BLANK = '_blank';
export const PARENT = '_parent';
export const TOP = '_top';

export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';

export enum AspectRatio {
  RectangleLevel1 = '32/9',
  RectangleLevel2 = '21/9',
  RectangleLevel3 = '16/9',
  RectangleLevel4 = '9/5',
  RectangleLevel5 = '3/2',
  RectangleLevel6 = '4/3',
  RectangleLevel7 = '2/1',
  VerticalRectangle = '2/3',
  Square = '1/1',
}

export enum DATE_FORMAT {
  MMM = 'MMM', // Month (formatting) - Jan, Feb, ..., Dec
  P = 'P', // Long localized date - 04/29/1453
  d = 'd', // Day of month - 1, 2, ..., 31
  'dd MMM yyyy' = 'dd MMM yyyy', // Mixed - 27 Jan 2017
  'MMM y' = 'MMM y', // Mixed - Jan 2017
  'MM/dd/yyyy' = 'MM/dd/yyyy', // Mixed - 04/21/2023
  'dd/MM/yyyy' = 'dd/MM/yyyy', // Mixed - 21/04/2023
  'dd-MM-yyyy' = 'dd-MM-yyyy', // Mixed - 21-04-2023
  'yyyy-MM-dd' = 'yyyy-MM-dd', // Mixed - 2023-04-21
  'yyyy/MM/dd' = 'yyyy/MM/dd', // Mixed - 2023/04/21
  "yyyy-MM-dd'T'HH:mm" = "yyyy-MM-dd'T'HH:mm",
}

export const ASPECT_RATIO_CARD_COMMON_PARAMS = {
  sm: AspectRatio.RectangleLevel5,
  md: AspectRatio.RectangleLevel3,
  lg: AspectRatio.RectangleLevel3,
};

export const EVENT_NAME_MAP: Record<string, keyof WindowEventMap> = {
  click: 'click',
  mouseDown: 'mousedown',
};

export const keyCodes: Record<string, any> = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};
