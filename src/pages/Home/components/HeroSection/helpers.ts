

export function getFoundationY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean
): any {
  if (isMobileView) {
    return [10, -10, 'easeOutQuad'];
  }

  if (isTabletView) {
    return [48, 38, 'easeOutQuad'];
  }
  
  if (isMiddleDesktopView) {
    return [35, 38, 'easeOutQuad'];
  }

  return [32, 38, 'easeOutQuad'];
}

export function getMinerXY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean,
  isDesktopView?: boolean
): any {

  if (isMobileView) {
    return {
      translateY: [27, 40, 'easeOutQuad'],
      translateX: [10, -10],
    };
  }

  if (isTabletView) {
    return {
      translateY: [43, 40, 'easeOutQuad'],
      translateX: [52, 35],
    };
  }
  
  if (isMiddleDesktopView) {
    return {
      translateY: [41, 40, 'easeOutQuad'],
      translateX: [50, 30],
    };
  }

  if (isDesktopView) {
    return {
      translateY: [31, 40, 'easeOutQuad'],
      translateX: [48, 30],
    };
  }

  return {
    translateY: [32, 38, 'easeOutQuad'],
    translateX: [50, 30],
  };
}
