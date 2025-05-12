import { css } from "@emotion/react"


export const footerStyle = css`

    display: flex;
    justify-content: center;
    font: "Montserrat", sans-serif;
    
`;

export const hStyle = css`
    font-size: 96px;
    font-weight: 700;
    line-height: 1.1;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-left: 40px;
`;

export const butnStyle = css`
    background-color: #0D50FF;
    cursor: pointer;
    padding: 16px 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0D50FF;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 40px;
    color: #fff;
    transition: 0.3s;

    :hover {
        background-color: #282828;
        color:rgb(255, 255, 255);
    }
`;