import { css } from "@emotion/react";

import fontsStyle from "./fonts";
import resetStyles from "./reset";
import commonStyles from "./common";
import variablesStyle from "./variables";



const globalStyles = css`
    ${fontsStyle}
    ${resetStyles}
    ${commonStyles}
    ${variablesStyle}
`;

export default globalStyles;