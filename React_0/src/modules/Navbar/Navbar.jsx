/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";

import Container from "../layouts/Container/Container";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarCart from "./NavbarCart/NavbarCart";
import { navbarStyle, navbarContentStyle, navbarScrolledStyle } from "./styles";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

// import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);



    return (
        <nav css={[navbarStyle, scrolled && navbarScrolledStyle]}>
            <Container>
                <div css={navbarContentStyle}>
                    <NavbarLogo />
                    <NavbarMenu />
                    <NavbarCart />

                    {/* <SwitchThemeButton /> */}
                </div>
            </Container>

        </nav>
    )
}
export default Navbar;