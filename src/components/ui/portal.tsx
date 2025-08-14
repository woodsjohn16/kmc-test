'use client';

import { useLayoutEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
    let node = document.getElementById('modal-root');
    if (!node) {
      node = document.createElement('div');
      node.id = 'modal-root';
      document.body.appendChild(node);
    }

    return () => {
      if (node && document.getElementById('modal-root')) {
        node.remove();
      }
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    children,
    document.getElementById('modal-root') as HTMLElement
  );
}
