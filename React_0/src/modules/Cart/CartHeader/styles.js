import { css } from "@emotion/react";

export const wrapperStyles = css ` 
    display: flex;
    justify-content: right;

`;

export const buttonStyles = css `
    background-color: none;
    color: #282828;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: auto;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color:#0D05ff;
        color: white;
        transition: 0.3s;
    }
`;