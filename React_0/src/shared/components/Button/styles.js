import { css } from "@emotion/react";

export const btn1Style = css`
    background-color: #0D50FF;
    cursor: pointer;
    padding: 16px 56px;
    // width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0D50FF;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    color: #fff;
    transition: 0.3s;

    :hover {
        background-color: #282828;
        color:rgb(255, 255, 255);
    }
`;