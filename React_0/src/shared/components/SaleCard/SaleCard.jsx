/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
    productCardWrapperStyle,
    productCardImageWrapperStyle,
    productCardImageStyle,
    productCardTitleStyle,
    productCardActionsStyle,
    productCardPriceStyle,
    productCardActions,
    buttonSaleCardStyle,
    productCardPriceDiscountStyle,
    productLinkStyle
} from "./styles";

const SaleCard = ({ id, image, title, price, discont_price, onAddProductToCart }) => {
    const addToCart = (id) => {
        console.log("Add to cart clicked for product ID:", id);
        // функция добавления товара в корзину
    };


    return (
        <Link to={`/products/${id}`} css={productLinkStyle}>
            <div css={productCardWrapperStyle}>
                <div css={productCardImageWrapperStyle}>

                    <img css={productCardImageStyle} src={image} alt={title} />
                </div>
                <p css={productCardTitleStyle}>{title}</p>
                <div css={productCardActionsStyle}>
                </div>
                <div css={productCardActionsStyle}>

                    <div>
                        <span css={productCardPriceDiscountStyle}>{discont_price} €</span>
                    </div>
                    <div>
                        <span css={productCardPriceStyle}>{price} €</span>
                    </div>

                    {/* <span css={productCardAddToCartIconStyle} className="product-card-actions" onClick={() => addToCart(id)}><AddToCartIcon /></span> */}
                </div>
                <div css={productCardActions} className="product-card-actions">
                    <Button css={buttonSaleCardStyle} onClick={() => onAddProductToCart(id)}>Add to cart</Button>
                </div>
            </div>
        </Link>
    );
}
export default SaleCard;