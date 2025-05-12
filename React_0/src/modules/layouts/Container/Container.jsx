/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const containerStyle = css`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;

    @media(min-width: 600px) {
        max-width: 540px;
    }

    @media(min-width: 768px) {
        max-width: 750px;
    }

    @media(min-width: 1024px) {
        max-width: 970px;
    }

    @media(min-width: 1440px) {
        max-width: 1170px;
    }

    @media(min-width: 1536px) {
        max-width: 1420px;
    }
`;

const Container = ({ children }) => {
    return <div css={containerStyle}>{children}</div>

    }
export default Container;