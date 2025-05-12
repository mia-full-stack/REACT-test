/** @jsxImportSource @emotion/react */

import { AddToCartIcon } from "../icons";

import {
    productCardWrapperStyle,
    productCardImageWrapperStyle,
    productCardImageStyle,
    productCardTitleStyle,
    productCardActionsStyle,
    // productCardPriceNameStyle,
    productCardPriceStyle,
    productCardAddToCartIconStyle

} from "./styles";

const SaleCard = ({ id, image, title, price, discont_price }) => {
    const addToCart = (id) => {
        console.log("Add to cart clicked for product ID:", id);
        // функция добавления товара в корзину
    };


    return (
        <div css={productCardWrapperStyle}>
            <div css={productCardImageWrapperStyle}>
                
                <img css={productCardImageStyle} src={image} alt={title} />
            </div>
            <p css={productCardTitleStyle}>{title}</p>
            <div css={productCardActionsStyle}>
            </div>
            <div css={productCardActionsStyle}>
                <div>
                    <span css={productCardPriceStyle}>{price} €</span>
                </div>
                <div>
                    <span css={productCardPriceStyle}>{discont_price} €</span>
                </div>
                <span css={productCardAddToCartIconStyle} onClick={() => addToCart(id)}><AddToCartIcon /></span>
            </div>

        </div>
    );
}
export default SaleCard;