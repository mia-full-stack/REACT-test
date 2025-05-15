import { css } from "@emotion/react";

/* Основной контейнер для формы скидки */
export const discountContainer = css`   
    display: flex;
    flex-direction: column;
    background-color: #0D50FF;
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 50px;
    // margin-bottom: 50px;
`

  /* Стиль для заголовка */
export const discountHeading = css`
    text-align: center;
    font-size: 64px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
`

  /* Контейнер для содержимого (изображение + форма) */
export const discountContent = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // gap: 20px;
        @media (max-width: 768px) {
        flexDirection: column;
    }
`

  /* Контейнер для изображения животных */
export const petsImage = css`
    // flex: 1;
    display: flex;
    justify-content: center;
    margin-bottom: -20px;
`

  /* Стиль для изображения, чтобы оно было адаптивным */

export const petsImageImg = css`
    max-width: 100%;
    height: auto;
`

  /* Стили для формы */
export const discountForm = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 516px;
        @media (max-width: 768px) {
        width: 100%;
        maxWidth: 100%;
    }
`

  /* Стили для полей ввода */
export const discountFormInput = css`
    padding: 16px 32px;
    background-color: #0D50FF;
    color: white;
    border-radius: 4px;
    border: 1px solid #fff;
    font-size: 16px;
    outline: none;
        &::placeholder {
        color:rgb(249, 248, 248);
        opacity: 1;
        fontStyle: italic;
        fontSize: 14px; 
`

  /* Стили для кнопки */
export const discountButton = css`
    padding: 12px 16px;
    background-color: white;
    color: #2563eb;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 20px;

    &:hover {
    background-color: #f8f9fa;
    transform: translateY(-2px);

}
`