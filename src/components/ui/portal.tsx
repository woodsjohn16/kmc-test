'use client';

import { useLayoutEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export function Portal({ children }: PortalProps) {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let node = document.getElementById('modal-root');
    if (!node) {
      node = document.createElement('div');
      node.id = 'modal-root';
      document.body.appendChild(node);
    }
    setPortalNode(node);

    return () => {
      if (node && !document.getElementById('modal-root')) {
        node.remove();
      }
    };
  }, []);

  if (!portalNode) return null;

  return createPortal(children, portalNode);
}
