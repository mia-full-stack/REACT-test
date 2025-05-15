/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
// import { X } from 'lucide-react'; // Если у вас нет этой библиотеки, можно использовать обычный символ "×"

import {modalBackdropStyle,
    modalContentStyle,
    modalHeaderStyle,
    modalTitleStyle,
    closeButtonStyle,
    // closeButtonHoverStyle,
    modalBodyStyle} from './styles'; // Импортируйте ваши стили


const Modal = ({ isOpen, onClose, title, children }) => {
    // Блокируем прокрутку страницы при открытом модальном окне
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Если модальное окно закрыто, не рендерим его
    if (!isOpen) return null;

    // Закрытие модального окна при клике на фон
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div css={modalBackdropStyle} onClick={handleBackdropClick}>
            <div css={modalContentStyle}>
                <div css={modalHeaderStyle}>
                    <h2 css={modalTitleStyle}>{title}</h2>
                    <button
                        css={closeButtonStyle}
                        onClick={onClose}
                        aria-label="Закрыть"
                    >
                        {/* Если у вас есть lucide-react или другая библиотека иконок */}
                        {/* <X size={20} /> */}
                        {/* Если нет библиотеки иконок */}
                        ×
                    </button>
                </div>
                <div css={modalBodyStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
