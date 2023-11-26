import React, { RefObject } from 'react';

export const useMouse = (
  elementRef: RefObject<HTMLElement>,
  {
    onMouseMove,
    onMouseUp,
  }: {
    onMouseMove: (displacementX: number, displacementY: number, deltaX: number) => void;
    onMouseUp: (displacementX: number, displacementY: number, event: React.MouseEvent) => void;
  },
) => {
  let isGrabbing = false;
  let isMouseDown = false;
  let isMouseMoved = false;
  let mouseDownX = 0;
  let previousX = 0;

  const handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (elementRef.current) {
      isGrabbing = true;
    }

    isMouseDown = event.buttons > 0;
    mouseDownX = event.clientX;
    previousX = event.clientX;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isMouseDown && event.buttons > 0) {
      onMouseMove(event.clientX - mouseDownX, 0, event.clientX - previousX);
      isMouseMoved = true;
      previousX = event.clientX;
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (elementRef.current) {
      isGrabbing = false;
    }

    if (isMouseDown && isMouseMoved) {
      onMouseUp(event.clientX - mouseDownX, 0, event);
    }
    isMouseDown = false;
    isMouseMoved = false;
  };

  return {
    onMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseDown(event),
    onMouseMove: (event: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseMove(event),
    onMouseUpCapture: (event: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseUp(event),
    onMouseLeave: (event: React.MouseEvent<HTMLElement, MouseEvent>) => handleMouseUp(event),
    isGrabbing,
  };
};
