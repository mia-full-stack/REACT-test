/** @jsxImportSource @emotion/react */

// import { addToCart } from "../../../redux/cart/cart-slice";

import {Link} from "react-router-dom";

import Button from "../Button/Button";

import {
    productCardWrapperStyle,
    productCardImageWrapperStyle,
    productCardImageStyle,
    productCardTitleStyle,
    productCardActionsStyle,
    productCardPriceStyle,
    productCardActions,
    productLinkStyle
} from "./styles";

const ProductCard = ({ id, image, title, price, onAddProductToCart }) => {

    return (

        <Link to={`/products/${id}`} css={productLinkStyle}>
        <div css={productCardWrapperStyle}>
            <div css={productCardImageWrapperStyle} >
                <img css={productCardImageStyle} src={image} alt={title} />
            </div>
            <p css={productCardTitleStyle}>{title}</p>
            <div css={productCardActionsStyle}>
            </div>
            <div css={productCardActionsStyle}>
                <div>
                    <span css={productCardPriceStyle}>{price} €</span>
                </div>
            </div>
            <div css={productCardActions} className="product-card-actions">
                <Button onClick={() => onAddProductToCart(id)}>Add to cart</Button>
            </div>
            
        </div>
        </Link>
    );
}
export default ProductCard;