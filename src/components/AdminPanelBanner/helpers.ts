export function getTextLayerConfig(isMobileView: boolean): any {
  return {
    translateY: [0, 0],
    // translateX: [-5, 10],
    opacity: [0, 3.0],
    speed: -5,
  };
}

export function getImageLayerConfig(isMobileView: boolean): any {

  if (isMobileView) {
    return {
      translateY: [31, 31],
      translateX: [-15, 10],
      opacity: [0, 3.0],
      speed: -15,
      expanded: false,
    };
  }

  return {
    // translateY: [0, 0],
    translateX: [55, 40],
    opacity: [0, 3.0],
    speed: -5,
    expanded: false,
  };
}
