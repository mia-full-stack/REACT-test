import { memo } from "react";
import { Link } from "react-router-dom";

import Divider from "@mui/material/Divider";

import { addToCart } from "../../../redux/cart/cart-slice";

import {boxCartStyle} from "./styles";

const CartItem = ({ id, image, title, price, discont_price }) => {


    return (
        <div css={boxCartStyle}>
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <p>{title}</p>
            <div>
                <span>{price} €</span>
                {discont_price && <span>{discont_price} €</span>}
            </div>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <Divider  />
        </div>
    );
}
export default memo(CartItem);