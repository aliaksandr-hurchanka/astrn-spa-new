import { useLayoutEffect } from 'react';

/**
 * @param visible - Default. The overflow is not clipped. The content renders outside the element's box
 * @param hidden - The overflow is clipped, and the rest of the content will be invisible
 * @param scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
 * @param auto - Similar to scroll, but it adds scrollbars only when necessary
 */
type TScrollOptions = 'hidden' | 'auto' | 'visible' | 'scroll';

const OVERFLOW_HIDDEN: TScrollOptions = 'hidden';
const OVERFLOW_AUTO: TScrollOptions = 'auto';

/**
 * Hook to hide global scroll (for body) with rendering of some components
 */
export function useLockBodyScroll(): void {
  useLayoutEffect(() => {
    // Prevent scrolling on mount
    setTimeout(() => {
      document.body.style.overflow = OVERFLOW_HIDDEN;
    }, 0);

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = OVERFLOW_AUTO;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}
