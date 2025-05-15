/** @jsxImportSource @emotion/react */

import { btn1Style } from "./styles";

const Button = ({ children, type = "submit", ...props }) => {
    return (
        <button type={type} {...props} css={btn1Style}>
            {children}
        </button>
    );
};

export default Button;
