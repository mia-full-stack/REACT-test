import { css } from "@emotion/react";

export const navbarCartIconWrapper = css`
position: relative; // Это важно для абсолютного позиционирования дочерних элементов
display: inline-flex;
`;

export const navbarCartStyle = css`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 5px; // Отрицательное значение для смещения вверх
left: -10px; // Отрицательное значение для смещения влево
padding: 10px 13px;
border-radius: 50px;
font-size: 12px;
font-weight: 600;
line-height: 0.9;
background-color: #0D50FF;
color: #fff;
    &:hover {
        background-color: rgb(85, 87, 219);
}
`;