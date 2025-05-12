/** @jsxImportSource @emotion/react */

import Container from "../../modules/layouts/Container/Container";

import { Box } from "@mui/material"

import { Link } from "react-router-dom";
import { Heading } from "rsuite";

import {containerStyle, btnStyle, wrapperStyle, pStyle } from "./styles";

const NotFoundPage = () => {
    return (
        <Container css={containerStyle}>
            

            <div css={wrapperStyle}>
                <img
                    src="/404.png"
                    alt="Группа домашних животных"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
                <p css={pStyle}>Page Not Found</p>
                <p>We’re sorry, the page you requested could not be found. <br />Please go back to the homepage.</p>
                <Link css={btnStyle} to="/">Go Home</Link>
            </div>


        </Container>
    )
}

export default NotFoundPage;