"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Portal } from "./portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose, mounted]);

  if (!mounted || !isOpen) return null;

  return (
    <Portal>
      <div
        className="modal-container"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
          pointerEvents: "auto",
        }}
        aria-modal="true"
        role="dialog"
        onClick={onClose}
      >
        <div
          className={`relative z-[9999] transform transition-all duration-300 ease-in-out ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          />
          {children}
        </div>
      </div>
    </Portal>
  );
}
