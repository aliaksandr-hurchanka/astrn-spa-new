import { useEffect, useRef } from 'react';

type UseOutsideClickProps = {
  eventName: keyof WindowEventMap;
  callback: (value?: boolean) => void;
  options?: boolean | EventListenerOptions;
};

/**
 * @param callback - method that fires on an event
 * @param eventName - name of the event
 * @param options - options for event
 */
export const useOutsideClick = <T extends HTMLElement>({
  eventName,
  callback,
  options,
}: UseOutsideClickProps) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const handle = (event: Event) => {
      if (elementRef.current && !elementRef?.current?.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener(eventName, handle, options);

    return () => {
      document.removeEventListener(eventName, handle);
    };
  }, [callback, elementRef, eventName, options]);

  return {
    elementRef,
  };
};
