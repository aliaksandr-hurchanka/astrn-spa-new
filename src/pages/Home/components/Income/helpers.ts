export function getLineLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [10, 10],
      translateX: [5, -10, 'easeOutQuad'],
      opacity: [0, 2.0],
      speed: -100,
    };
  }

  return {
    translateY: [10, 10],
    translateX: [5, -10, 'easeOutQuad'],
    opacity: [0, 2.0],
    speed: -100,
  };
}

export function getTextLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [15, -5],
      translateX: [0, 0],
      opacity: [3.0, -1.0],
      // speed: 10,
    };
  }

  return {
    translateY: [15, -5],
    translateX: [0, 0],
    opacity: [3.0, -1.0],
    // speed: 10,
  };
}

export function getFoundationLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
    };
  }

  return {
    translateY: [0, 0],
  };
}
