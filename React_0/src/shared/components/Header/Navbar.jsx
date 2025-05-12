/** @jsxImportSource @emotion/react */
import { LogoIcon } from "../../../assets/icons"
import { Cart } from "../../../assets/icons";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";

import styles from "./Navbar.module.css"


const Navbar = () => {
    return (
        <header className={styles.nav}>
            <div>
                {/* <a href="/"> <img src="../../../public/logo.svg" alt="" /></a> */}
                <LogoIcon />
            </div>
            <HeaderMenu />
            <div>
                <a href="/">
                    {/* <img src="../../../public/icon.svg" alt="" /> */}
                    <Cart />
                </a>
            </div>
            <SwitchThemeButton />
        </header>
    )
}
export default Navbar;