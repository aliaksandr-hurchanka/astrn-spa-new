export function getLineLayerConfig(
  isMobileView: boolean,
  isTabletView: boolean,
  isMiddleDesktopView: boolean,
  isDesktopView: boolean
): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
      translateX: [20, 5, 'easeOutQuad'],
      opacity: [0, 3.0],
      speed: -10,
    };
  }

  if (isTabletView) {
    return {
      translateY: [32, 32],
      translateX: [40, 15, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -10,
    };
  }

  if (isMiddleDesktopView) {
    return {
      translateY: [25, 25],
      translateX: [20, 10, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -10,
    };
  }

  if (isDesktopView) {
    return {
      translateY: [25, 25],
      translateX: [20, 10, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -10,
    };
  }

  return {
    translateY: [10, 10],
    translateX: [20, 0, 'easeOutQuad'],
    opacity: [0, 2.0],
    speed: -10,
  };
}

export function getTextLayerConfig(isMobileView: boolean, isTabletView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
      translateX: [0, 0],
      opacity: [0.0, 3.0],
    };
  }

  if (isTabletView) {
    return {
      translateY: [30, 30],
      translateX: [0, 0],
      opacity: [0.0, 3.0],
    };
  }

  return {
    translateY: [15, -5],
    translateX: [0, 0],
    opacity: [0.0, 3.0],
  };
}

export function getFoundationLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
      translateX: [0, 0],
    };
  }

  return {
    translateY: [0, 0],
  };
}