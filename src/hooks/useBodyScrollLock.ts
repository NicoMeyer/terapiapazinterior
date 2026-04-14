import { useEffect } from 'react';

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflowY = body.style.overflowY;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;
    const previousHtmlOverflowY = documentElement.style.overflowY;
    const previousHtmlBehavior = documentElement.style.scrollBehavior;
    const scrollY = window.scrollY;

    if (isLocked) {
      documentElement.style.overflowY = 'hidden';
      documentElement.style.scrollBehavior = 'auto';
      body.style.overflowY = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      documentElement.style.overflowY = previousHtmlOverflowY || 'auto';
      documentElement.style.scrollBehavior = previousHtmlBehavior;
      body.style.overflowY = previousBodyOverflowY || 'auto';
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;
    }

    return () => {
      documentElement.style.overflowY = previousHtmlOverflowY;
      documentElement.style.scrollBehavior = previousHtmlBehavior;
      body.style.overflowY = previousBodyOverflowY;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      if (isLocked) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isLocked]);
}
