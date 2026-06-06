
"use client";

import css from "../Modal/Modal.module.css";
import { useEffect } from "react";

interface ConfirmModalProps {
  title: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ title,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel }: ConfirmModalProps) {

  useEffect(() => {
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = '';
    };
  }, [onCancel]);
    
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onCancel();
      }
    };
  
  return (
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
            <button onClick={onCancel} className={css.closeButton}>
                <svg width="32" height="32">
                   <use href="/sprite.svg#icon-close"></use>
                </svg>
            </button>
            <div className={css.content}>
                <h2 className={css.title}>{title}</h2>

                <p className={css.text}>Ми будемо сумувати за вами!</p> 
            </div>
            <div className={css.actions}>
              <button
                type="button"
                className={css.cancelButton}
                onClick={onCancel}
              >
                {cancelButtonText}
              </button>
            
              <button
                type="button"
                className={css.submitButton}
                onClick={onConfirm}
              >
                {confirmButtonText}
              </button>
            </div>
      </div>
    </div>
  );
};