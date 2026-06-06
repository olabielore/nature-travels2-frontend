
"use client";

import css from "../Modal/Modal.module.css";
import { useEffect } from "react";
import Link from 'next/link';

interface ErrorWhileSavingModalProps {
    onClose: () => void;
}

export default function ErrorWhileSavingModal({ onClose }: ErrorWhileSavingModalProps) {

  useEffect(() => {
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = '';
    };
  }, [onClose]);
    
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
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
            <button onClick={onClose} className={css.closeButton}>
                <svg width="32" height="32">
                   <use href="/sprite.svg#icon-close"></use>
                </svg>
            </button>
            <div className={css.content}>
                <h2 className={css.title}>Помилка під час збереження</h2>

                <p className={css.text}>Щоб зберегти статтю вам треба увійти, якщо ще немає облікового запису зареєструйтесь</p> 
            </div>
            <div className={css.actions}>
                <Link
                    href="/login"
                    className={css.loginButton}
                    onClick={onClose}
                >
                    Увійти
                </Link>
            
                <Link
                    href="/register"
                    className={css.registerButton}
                    onClick={onClose}
                >
                    Зараєструватись
                </Link>
            </div>
      </div>
    </div>
  );
};