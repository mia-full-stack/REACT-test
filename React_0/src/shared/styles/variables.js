import {css} from "@emotion/react"

const variablesStyle = css`
:root {
    --main-text-color: #282828;
    --black: #000000;
    --light-grey: #F1F3F4;
    --light-grey-text: #8B8B8B;
    --grey-divider: #DDDDDD;
    --base-font-size: 16px;
    --blue-btn: #0D50FF;
    --white-text: #FFFFFF;
    --select-color: #80808080;
    --red-error: rgb(203, 6, 6);
    --form-gradient-left: #2451C6;
    --form-gradient-right: #0D50FF;

    --h1-font-size: clamp(2.5rem, 6vw, 6rem);
    --h2-font-size: clamp(2rem, 4vw, 4rem);
    --h3-font-size: clamp(1.5rem, 3vw, 2.5rem);
    --h4-font-size: clamp(1rem, 2vw, 1.25rem);
    --h5-font-size: clamp(0.8rem, 1vw, 1rem);
}
`;
export default variablesStyle;