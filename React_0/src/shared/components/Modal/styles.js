import { css } from "@emotion/react";

export const modalBackdropStyle = css`

    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    background - color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify - content: center;
    align - items: center;
    z - index: 1000;
`;
export const modalContentStyle = css`

    background - color: #fff;
    border - radius: 8px;
    width: 90 %;
    max - width: 500px;
    box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: modalAppear 0.3s ease - out;
`;
export const modalHeaderStyle = css`

    display: flex;
    justify - content: space - between;
    align - items: center;
    padding: 16px 20px;
    border - bottom: 1px solid #eee;
`;
export const modalTitleStyle = css`

    margin: 0;
    font - size: 1.25rem;
    font - weight: 600;
`;
export const closeButtonStyle = css`

    background: none;
    border: none;
    font - size: 1.5rem;
    cursor: pointer;
    color: #666;
    display: flex;
    align - items: center;
    justify - content: center;
    width: 32px;
    height: 32px;
    border - radius: 50 %;
`;
export const closeButtonHoverStyle = css`

    background - color: #f5f5f5;
    color: #333;
`;
export const modalBodyStyle = css`

    padding: 20px;
`;
export const modalAppearStyle = css`

    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
