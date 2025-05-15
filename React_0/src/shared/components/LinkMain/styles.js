import { css } from "@emotion/react";

export const headerWrapper = css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 40px 40px 0px;
`;

export const line = css`
    flex-grow: 1;
    height: 1px;
    background-color: #d9d9d9;
    margin-left: 32px;
    margin-bottom: 40px;
`;

export const headerTitle = css`
    font-size: 64px;
    font-weight: 600;
    // text-decoration: none;
    // font-family: "Montserrat", sans-serif;
    margin-bottom: 50px;
    color: var(--main-text-color);
`;


export const linkStyle = css`
  text-decoration: none;
  color: inherit; /* Сохраняет цвет текста родительского элемента */
  
  &:hover {
    /* Стили при наведении, если нужны */
    color: rgb(85, 87, 219);
  }
  
  &:visited {
    /* Стили для посещенных ссылок, если нужны */
    text-decoration: none;
  }
`;


export const backBtn = css`
    white-space: nowrap;
    padding: 6px 12px;
    margin-bottom: 40px;
    
    border: 1px solid #ccc;
    background: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    line-height: 1.26;
    color: var(--main-text-color);
`;

export const backBtnHover = css`
@media (max-width: 560px) {
    .line,
    .backBtn {
        display: none;
    }

    .headerWrapper {
        padding: 10px 20px;
    }


@media (max-width: 768px) {
    .headerWrapper {
        padding: 0px 20px
    }
}
`;