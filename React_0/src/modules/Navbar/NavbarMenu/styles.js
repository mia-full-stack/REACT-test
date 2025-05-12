import { css } from "@emotion/react";

export const navbarMenuStyle = css`
    display: flex;
    gap: 64px;
`;

export const navbarMenuLinkStyle = color => css`
text-decoration: none;
color: #282828;
font-size: 1.625rem;
font-family: "Montserrat", sans-serif;
font-weight: 600;
color: ${color};

&.active {
    border-bottom: 2px solid #282828;
    padding-bottom: 0.25rem;
}

:hover {
    color:rgb(128, 127, 127);
}
`;