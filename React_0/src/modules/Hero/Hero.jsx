/** @jsxImportSource @emotion/react */

import { Box, Typography } from "@mui/material"
import Button from "../../shared/components/Button/Button"
import Container from "../../modules/layouts/Container/Container";

import {butnStyle, hStyle} from "./styles"

function Hero() {
    return (
        // Создаем контейнер для баннера с относительным позиционированием
        <Box
            sx={{
                position: "relative", // Относительное позиционирование для абсолютного позиционирования дочерних элементов
                height: "600px",  // Высота баннера
                display: "flex", // Используем flex для центрирования содержимого
                overflow: "hidden", // Скрываем выходящие за пределы элементы
            }}
        >
            {/* Контейнер для фонового изображения с затемнением */}
            <Box
                sx={{
                    position: "absolute", // Абсолютное позиционирование
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1, // Помещаем фон под содержимое
                    "&::after": {
                        // Псевдоэлемент для затемнения изображения
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.3)", // Полупрозрачный черный цвет для затемнения
                    },
                }}
            >
                {/* Фоновое изображение */}
                <img
                    src="/img.svg"
                    alt="Pets"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Масштабируем изображение, сохраняя пропорции и заполняя контейнер
                        transform: "scaleX(-1)"
                    }}
                />
            </Box>

            {/* Содержимое баннера */}
            <Container >
                <Box sx={{ color: "white", marginTop: "80px", maxWidth: "80%", position: "relative", zIndex: 1 }}>
                    {/* Заголовок баннера */}
                    {/* <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: "96px", fontWeight: "700", fontFamily: "Montserrat", lineHeight: "1.2" }}>
                        Amazing Discounts on Pets Products!
                    </Typography> */}
                    <h1 css={hStyle}>Amazing Discounts on Pets Products!</h1>
                    <Button css={butnStyle}>Check out</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
