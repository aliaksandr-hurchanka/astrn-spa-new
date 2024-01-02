

export function getLinesXY(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [17, 23],
    };
  }

  return {
    translateY: [10, 23],
  };
}

export function getFoundationY(
  isMobileView?: boolean,
  isTabletView?: boolean,
  isMiddleDesktopView?: boolean
): any {
  if (isMobileView) {
    return [15, -10, 'easeOutQuad'];
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
      translateY: [17, 13, 'easeOutQuad'],
      translateX: [16, 16],
    };
  }

  if (isTabletView) {
    return {
      translateY: [33, 40, 'easeOutQuad'],
      translateX: [52, 35],
    };
  }
  
  if (isMiddleDesktopView) {
    return {
      translateY: [22, -7, 'easeOutQuad'],
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
    translateY: [26, 20, 'easeOutQuad'],
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
      translateY: [40, 30, 'easeOutQuad'],
    };
  }

  return {
    translateY: [20, -20, 'easeOutQuad'],
  };
}
