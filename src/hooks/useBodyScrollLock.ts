import { useEffect } from 'react';

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    const previousOverflowY = document.body.style.overflowY;

    if (isLocked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = previousOverflowY;
    };
  }, [isLocked]);
}
