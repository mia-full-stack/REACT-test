/** @jsxImportSource @emotion/react */
import { memo } from "react";
// import Button from "../../../shared/components/Button/Button";

import { wrapperStyles, buttonStyles } from "./styles";

const CartHeader = ({ onClearCart }) => {
    return (
        <div css={wrapperStyles}>
            <button css={buttonStyles} onClick={onClearCart} variant="text">
                Clear cart
            </button>
        </div>


    );
};

export default memo(CartHeader);
