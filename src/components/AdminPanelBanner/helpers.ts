export function getTextLayerConfig(isMobileView: boolean): any {
  return {
    translateY: [0, 0],
    // translateX: [-5, 10],
    opacity: [0, 3.0],
    speed: -5,
  };
}

export function getImageLayerConfig(isMobileView: boolean, isTabletView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [0, 0],
      translateX: [0, 0],
      opacity: [0, 3.0],
      speed: -15,
    };
  }

  if (isTabletView) {
    return {
      translateY: [0, 0],
      translateX: [0, 0],
      opacity: [0, 3.0],
      speed: -15,
    };
  }

  return {
    translateX: [0, 0],
    opacity: [0, 3.0],
    speed: -5,
  };
}
