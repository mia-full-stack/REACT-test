import { css } from "@emotion/react";

import { imgResponsiveStyle } from "../../styles/mixins";

export const productCardWrapperStyle = css`
    max-width: 386px;
    border: 2px solid #00000026;
    border-radius: 10px;
    overflow: hidden;
`;

export const productCardImageWrapperStyle = css`
    text-align: center;
    margin-bottom: 15px;
`;

export const productCardImageStyle = css`
    ${imgResponsiveStyle}
    // max-width: 100%;
    // height: auto;
`
export const productCardTitleStyle = css`
    font-size: 24px;
    line-height: 1.5;
    display: flex;
    justify-content: left;
    margin: 0 32px;
    white-space: nowrap; /* Запрещает перенос текста на новую строку */
    overflow: hidden; /* Скрывает текст, который не помещается */
    text-overflow: ellipsis; /* Добавляет многоточие в конце обрезанного текста */
`;

export const productCardPriceNameStyle = css`
    font-size: 14px;
    font-weight: 500;
    color: #666666;
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
`;

export const productCardPriceStyle = css`
    font-size: 24px;
    font-weight: 700;
    color: #000;
    
`;

export const productCardActionsStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 35px;
    margin-right: 35px;
`;

export const productCardAddToCartIconStyle = css`
    cursor: pointer;
`;