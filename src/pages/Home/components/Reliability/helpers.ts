export function getLineLayerConfig(
  isMobileView: boolean,
  isTabletView: boolean,
  isMiddleDesktopView: boolean,
  isDesktopView: boolean
): any {

  if (isMobileView) {
    return {
      translateY: [42, 42],
      translateX: [-50, 5, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
    };
  }

  if (isTabletView) {
    return {
      translateY: [35, 35],
      translateX: [15, 20, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
    };
  }

  if (isMiddleDesktopView) {
    return {
      translateY: [25, 25],
      translateX: [5, 10, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
    };
  }

  if (isDesktopView) {
    return {
      translateY: [25, 25],
      translateX: [10, 15, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
    };
  }

  return {
    translateY: [10, 10],
    translateX: [-10, 5, 'easeOutQuad'],
    opacity: [0, 2.0],
    speed: -100,
  };
}

export function getTextLayerConfig(isMobileView: boolean, isTabletView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
      translateX: [0, 0],
      // opacity: [3.0, -1.0],
    };
  }

  if (isTabletView) {
    return {
      translateY: [15, -5],
      translateX: [0, 0],
      opacity: [0.0, 3.0],
    };
  }

  return {
    translateY: [15, -5],
    translateX: [0, 0],
    opacity: [3.0, -1.0],
  };
}

export function getFoundationLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [39, 39],
      translateX: [20, 20],
    };
  }

  return {
    translateY: [0, 0],
  };
}