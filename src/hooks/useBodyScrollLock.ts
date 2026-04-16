import { useLayoutEffect } from 'react';

export function useBodyScrollLock(isLocked: boolean) {
  useLayoutEffect(() => {
    if (!isLocked) {
      return undefined;
    }

    const { body, documentElement } = document;
    const previousBodyOverflowY = body.style.overflowY;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousHtmlOverflowY = documentElement.style.overflowY;
    const previousHtmlBehavior = documentElement.style.scrollBehavior;
    const scrollY = window.scrollY;

    documentElement.style.overflowY = 'hidden';
    documentElement.style.scrollBehavior = 'auto';
    body.style.overflowY = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      documentElement.style.overflowY = previousHtmlOverflowY;
      body.style.overflowY = previousBodyOverflowY;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      // Keep restoration immediate; otherwise smooth scrolling can make the
      // fixed-body unlock look like a jump to the top before returning.
      documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);

      window.requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        documentElement.style.scrollBehavior = previousHtmlBehavior;
      });
    };
  }, [isLocked]);
}
