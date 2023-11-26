import { useCallback, useEffect, useState } from 'react';

const THRESHOLD_DEFAULT = 0.5;
const ROOT_MARGIN_DEFAULT = '100%';

/**
 * @param {number} threshold - indicating at what percentage of the target's visibility
 * @param {number} rootMargin - indicating root margin
 * the observer's callback should be executed
 * @return {boolean} isOnScreen - indicating whether the target element intersects with the intersection observer's root
 * @return {(node) => void} ref - callback for setting observable element
 * @return {HTMLElement} element - existing element
 */
export const useIsOnScreen = <T extends HTMLElement>(
  threshold = THRESHOLD_DEFAULT,
  rootMargin = ROOT_MARGIN_DEFAULT,
) => {
  const [currentEntry, setCurrentEntry] = useState<IntersectionObserverEntry>();
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((node: T) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: ReadonlyArray<IntersectionObserverEntry>): void => {
        setCurrentEntry(entry);
      },
      {
        threshold,
        rootMargin,
      },
    );

    if (element !== null) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element]);

  return {
    isOnScreen: currentEntry?.isIntersecting,
    ref,
    element,
  };
};
