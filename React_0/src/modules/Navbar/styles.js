import { css } from '@emotion/react';

// export const navbarStyle = css`
//     // background-color: rgba(255, 255, 255, 1);
//     background-color: rgba(245, 240, 240, 0.8);
//     padding: 1rem 0;
// `;

// export const navbarContentStyle = css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;


export const navbarStyle = css`
    background-color: rgba(245, 240, 240, 0.8);
    padding: 1rem 0;
    margin-top: -100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    
    /* Плавная анимация для всех изменений */
    transition: all 0.3s ease;
`;

export const navbarContentStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// Добавляем стиль для основного контента, чтобы он не скрывался под navbar
export const mainContentStyle = css`
    /* Добавляем отступ сверху, равный высоте navbar */
    /* Замените 70px на фактическую высоту вашего navbar */
    padding-top: 70px; 
`;

export const navbarScrolledStyle = css`
    padding: 0.5rem 0;
    background-color: rgba(245, 240, 240, 0.95); /* Более непрозрачный фон при прокрутке */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Более выраженная тень */
    transition: all 0.3s ease;
`;