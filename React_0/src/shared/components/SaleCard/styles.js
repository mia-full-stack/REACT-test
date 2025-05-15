import { css } from "@emotion/react";

import { imgResponsiveStyle } from "../../styles/mixins";

export const productCardWrapperStyle = css`
    max-width: 316px;
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
`
export const productCardTitleStyle = css`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    display: flex;
    justify-content: left;
    margin: 0 32px;
    text-decoration: none;
    white-space: nowrap; /* Запрещает перенос текста на новую строку */
    overflow: hidden; /* Скрывает текст, который не помещается */
    text-overflow: ellipsis; /* Добавляет многоточие в конце обрезанного текста */
    max-width: 100%; /* Устанавливает ширину элемента */
`;

export const productLinkStyle = css`
    text-decoration: none;
    color: inherit; /* Сохраняет цвет текста родительского элемента */  
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
    font-size: 20px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    text-decoration: line-through;
`;

export const productCardPriceDiscountStyle = css`
    font-size: 40px;
    font-weight: 600;
    color: #000;
    
    margin-right: 10px;
`;
export const productCardActionsStyle = css`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    gap: 35px;
    margin-left: 35px;
    margin-top: 5px;
    margin-bottom: 15px;
`;

export const productCardActions = css`
    display: flex;
    justify-content: center;
    position: absolute;
    margin: 0 50px 20px;
  /* Скрываем кнопку по умолчанию */
    opacity: 0;
    transform: translateY(-40px);
    transition: all 0.3s ease;
`;

export const buttonSaleCardStyle = css`
    width: 100%;
    // height: 100%;

`;

export const productCardAddToCartIconStyle = css`
    cursor: pointer;
`;