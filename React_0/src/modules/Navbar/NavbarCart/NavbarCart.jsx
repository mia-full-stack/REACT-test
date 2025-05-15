/** @jsxImportSource @emotion/react */

// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectTotalCartItems } from "../../../redux/cart/cart-select";

import Cart from "../../../assets/icons/Cart";

import { navbarCartIconWrapper, navbarCartStyle } from "./styles";



const NavbarCart = () => {
    const totalItems = useSelector(selectTotalCartItems);
    return (
        <div css={navbarCartIconWrapper}>
            <NavLink to="/Cart"><Cart /></NavLink>
            <span css={navbarCartStyle}>{totalItems}</span>

        </div>
    )
}

export default NavbarCart;