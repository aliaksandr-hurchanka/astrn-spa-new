import React, { RefObject } from 'react';

import { useMouse } from './useMouse';

export const useMouseDrag = (elementRef: RefObject<HTMLElement>) => {
  const handleMouseMove = (displacementX: number, displacementY: number, deltaX: number) => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    element.scrollTo({
      top: 0,
      left: element.scrollLeft - deltaX,
    });
  };

  const handleMouseUp = (displacementX: number, displacementY: number, event: React.MouseEvent) => {
    if (Math.abs(displacementX) <= 2) {
      return;
    }

    event.stopPropagation();
  };

  return {
    mouseEventHandlers: useMouse(elementRef, {
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
    }),
  };
};
