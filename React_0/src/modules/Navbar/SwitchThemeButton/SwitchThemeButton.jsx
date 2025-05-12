import Button from "@mui/material/Button";

import { useSwitchTheme } from "../../../context/ThemeContext";

const SwitchThemeButton = ()=> {
    const {nextTheme, toggleTheme} = useSwitchTheme();

    return <Button onClick={toggleTheme} variant="outlined">To {nextTheme} theme</Button>
}

export default SwitchThemeButton;