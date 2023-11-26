export const getIsTouchDevice = () => Boolean('ontouchstart' in window || navigator.maxTouchPoints);
