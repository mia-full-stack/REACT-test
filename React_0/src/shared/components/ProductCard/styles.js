import { css } from "@emotion/react";

import { imgResponsiveStyle } from "../../styles/mixins";

export const productCardWrapperStyle = css`
    max-width: 386px;
    // padding: 45px 42px;
    border: 2px solid #00000026;
    border-radius: 10px;
    overflow: hidden;
    /* Добавляем селектор :hover здесь, чтобы иметь доступ к дочерним элементам */
    &:hover .product-card-actions {
        opacity: 1;
        transform: translate(0, -270%) scale(1);
    }
`;

export const productCardImageWrapperStyle = css`
    text-align: center;
    margin-bottom: 15px;
`;

export const productCardImageStyle = css`
    ${imgResponsiveStyle}
    // max-width: 100%;
    // height: auto;
    background-size: cover;
    background-position: center;
`;
export const productCardTitleStyle = css`
    font-size: 20px;
    line-height: 1.3;
    display: flex;
    justify-content: left;
    margin: 0 32px;
    margin-bottom: 10px;
    white-space: nowrap; /* Запрещает перенос текста на новую строку */
    overflow: hidden; /* Скрывает текст, который не помещается */
     text-overflow: ellipsis; /* Добавляет многоточие в конце обрезанного текста */
`;

export const productCardPriceNameStyle = css`
    font-size: 40px;
    font-weight: 600;
    color: #666666;
    text-transform: uppercase;
    display: block;
    // margin-bottom: 5px;
`;

export const productCardPriceStyle = css`
    font-size: 40px;
    font-weight: 600;
    color: #000;
`;

export const productCardActionsStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 35px;
    margin-right: 35px;
`;

export const productCardActions = css`
    display: flex;
    justify-content: center;
    margin: 0 32px 20px;
  /* Скрываем кнопку по умолчанию */
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
`;
export const productCardAddToCartIconStyle = css`
    cursor: pointer;
`;