import { useState, useEffect, MutableRefObject, useCallback } from 'react';

export function useGetHeightOfElement(ref: MutableRefObject<HTMLHeadingElement | null>) {
  const [height, setHeight] = useState<number>();

  const resizeHandler = useCallback(() => {
    const { clientHeight } = ref.current || {};

    if (height !== clientHeight) {
      setHeight(clientHeight);
    }
  }, [ref, height]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    const loadRenderTimeOut = setTimeout(() => {
      resizeHandler();
    }, 10);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      clearTimeout(loadRenderTimeOut);
    };
  }, [resizeHandler]);

  return height;
}
