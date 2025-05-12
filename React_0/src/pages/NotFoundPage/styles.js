import { css } from "@emotion/react";

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

`;


export const wrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // height: 100vh;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 90px;
`;

export const pStyle = css`
    font-size: 64px;
    font-weight: 700;
    color: #090D1A;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
`;

export const btnStyle = css`
    background-color: #0D50FF;
    text-decoration: none;
    cursor: pointer;
    padding: 16px 56px;
    border: 1px solid;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    margin-top: 20px;
    transition: 0.3s;

    :hover {
        background-color: #fff;
        color: #0D50FF;
    }
`;