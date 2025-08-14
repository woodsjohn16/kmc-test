'use client';

export function trackClick(element: HTMLElement) {
  console.log('Clicked element:', element);
}

export function withClickTracking(callback?: (e: React.MouseEvent<HTMLElement>) => void) {
  return (e: React.MouseEvent<HTMLElement>) => {
    trackClick(e.currentTarget);
    callback?.(e);
  };
}
