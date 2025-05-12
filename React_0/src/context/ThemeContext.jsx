import { useState, createContext, useContext, useCallback } from "react";
import { ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themeSwitchContext = createContext();

// Create light and dark themes
const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#2196f3",
        },
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
    },
})

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#51acf6",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#b3b3b3",
            paper: "#1e1e1e",
        },
        text: {
            primary: "#010101",
            secondary: "#000000",
    },
    },
})

// const light = {
//     color: {
//         lightDark:rgba(40, 40, 40, 1),
//         darkLight:rgba(255, 255, 255, 1),
//         lightBg: rgba(255, 255, 255, 1),
// }};

// const dark = {
//     color: {
//         lightDark:rgba(255, 255, 255, 1),
//         darkLight:rgba(40, 40, 40, 1),
//         lightBg: rgba(40, 40, 40, 1),
//     },
// };

const Theme = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")), []);

    return (
        <themeSwitchContext.Provider
            value={{
                currentTheme: theme,
                nextTheme: theme === "light" ? "dark" : "light",
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </themeSwitchContext.Provider>
    );
};

export default Theme;

export const useSwitchTheme = () => {
    const themeInfo = useContext(themeSwitchContext);

    return themeInfo;
};
