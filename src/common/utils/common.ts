import uniqueId from 'lodash/uniqueId';

import { BLANK, DESKTOP, MOBILE } from '../utils/constants';
import { Target } from '../utils/types';

import { regExpAnyCharacters, regExpMobileDevices, regExpSpaces } from './regEx';

export type Noop = (...args: unknown[]) => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop: Noop = () => {};

export function getClearedValue(inputName: string | number): string {
  return inputName
    .toString()
    .trim()
    .replace(regExpAnyCharacters, ' ')
    .replace(regExpSpaces, '_')
    .toLowerCase();
}

// Special util for build uniq key or any uniqValue
export function buildKey(arg1?: string | number, arg2?: string | number | undefined): string {
  const clearedArg1 = arg1 ? getClearedValue(arg1) : 'id';

  if (arg2 === 0 || arg2) {
    return clearedArg1.length ? `${clearedArg1}_${getClearedValue(arg2)}` : getClearedValue(arg2);
  }

  return uniqueId(clearedArg1);
}

export function isExternalLink(link: string): boolean {
  return !link.startsWith('/');
}
export function deviceDetect(): string {
  return regExpMobileDevices.test(navigator.userAgent) ? MOBILE : DESKTOP;
}
export function hasMobileDevice(): boolean {
  return deviceDetect() === MOBILE;
}

function hasSafariBrowser(): boolean {
  return navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
}
export function onOpenWindow(url: string, option: Target = BLANK) {
  const isSafariBrowser = hasSafariBrowser();

  if (isSafariBrowser) {
    return window.open(url, option);
  }

  return window.open(url, option, 'noopener,noreferrer');
}

// Generate random string/characters
export function buildStateParam(): string {
  return (Math.random() + 1).toString(36).substring(7);
}
