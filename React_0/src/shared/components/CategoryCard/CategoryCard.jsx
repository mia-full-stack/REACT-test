/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

import {
    productCardWrapperStyle,
    productCardImageWrapperStyle,
    productCardImageStyle,
    productCardTitleStyle,
    productLinkStyle
} from "./styles";


const CategoryCard = ({ image, title, id }) => {
    return (
        <Link to={`/categories/${id}`} css={productLinkStyle}>

            <div css={productCardWrapperStyle}>
                <div css={productCardImageWrapperStyle}>
                    <img css={productCardImageStyle} src={`http://localhost:3333${image}`} alt={title} />

                </div>
                <p css={productCardTitleStyle}>{title}</p>
            </div>
        </Link>
    );
}
export default CategoryCard;