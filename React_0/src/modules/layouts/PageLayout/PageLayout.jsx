/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const pageLayoutStyles = css`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

`;


const PageLayout = ({ children }) => {
    return (
        <div css={pageLayoutStyles}>{children}</div>

    );
}
export default PageLayout;