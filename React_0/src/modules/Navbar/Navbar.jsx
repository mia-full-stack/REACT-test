/** @jsxImportSource @emotion/react */


import Container from "../layouts/Container/Container";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarCart from "./NavbarCart/NavbarCart";
import { navbarStyle, navbarContentStyle } from "./styles";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";




const Navbar = () => {
    return (
        <nav css={navbarStyle}>
            <Container>
                <div css={navbarContentStyle}>
                    <NavbarLogo />
                    <NavbarMenu />
                    <NavbarCart />

                    <SwitchThemeButton />
                </div>
            </Container>

        </nav>
    )
}
export default Navbar;