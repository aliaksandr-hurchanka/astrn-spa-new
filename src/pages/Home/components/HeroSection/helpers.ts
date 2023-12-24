

export function getFoundationY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean
): any {
  if (isMobileView) {
    return [10, -10, 'easeOutQuad'];
  }

  if (isTabletView) {
    return [30, 38, 'easeOutQuad'];
  }
  
  if (isMiddleDesktopView) {
    return [38, 0, 'easeOutQuad'];
  }

  return [34, 30, 'easeOutQuad'];
}

export function getMinerXY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean,
  isDesktopView?: boolean
): any {

  if (isMobileView) {
    return {
      translateY: [10, 20, 'easeOutQuad'],
      translateX: [16, -10],
    };
  }

  if (isTabletView) {
    return {
      translateY: [30, 40, 'easeOutQuad'],
      translateX: [52, 35],
    };
  }
  
  if (isMiddleDesktopView) {
    return {
      translateY: [16, -7, 'easeOutQuad'],
      translateX: [50, 45],
    };
  }

  // if (isDesktopView) {
  //   return {
  //     translateY: [16, -7, 'easeOutQuad'],
  //     translateX: [50, 0],
  //   };
  // }

  return {
    translateY: [27, 20, 'easeOutQuad'],
    translateX: [50, 50],
  };
}

export function getTextXY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean
): any {

  if (isMobileView) {
    return {
      translateY: [5, -20, 'easeOutQuad'],
    };
  }

  return {
    translateY: [20, -20, 'easeOutQuad'],
  };
}
