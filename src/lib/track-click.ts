'use client';

import { useCallback } from 'react';
import type { MouseEventHandler } from 'react';

export function useClickTracking(): MouseEventHandler {
  return useCallback((e) => {
    if (typeof window === 'undefined') return;
    const element = e.currentTarget;
    console.log('Clicked element:', element);
  }, []);
}
