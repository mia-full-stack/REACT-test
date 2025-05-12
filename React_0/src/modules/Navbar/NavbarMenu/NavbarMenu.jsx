/** @jsxImportSource @emotion/react */

import { NavLink } from "react-router-dom";
// import { useTheme } from "@emotion/react";

import navbarMenuItem from "./navbarMenuItem";

import {navbarMenuStyle, navbarMenuLinkStyle} from "./styles";


const NavbarMenu = () => {
    // const { colors } = useTheme();

    const elements = navbarMenuItem.map(({ href, text }) => 
        <li key={text} >
            <NavLink to={href} css={navbarMenuLinkStyle()}>
            {text}
            </NavLink>
        </li>)
        return (
            <ul css={navbarMenuStyle}>
                {elements}
            </ul>
        )
}
export default NavbarMenu;