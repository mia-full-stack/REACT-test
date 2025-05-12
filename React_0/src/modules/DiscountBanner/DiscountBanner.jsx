/** @jsxImportSource @emotion/react */
// Компонент DiscountBanner - баннер с формой для получения скидки
// Отображается на главной странице и позволяет пользователям подписаться на рассы��ку

import { useState } from "react"

import Container from "../layouts/Container/Container";

import { discountContainer, discountContent, discountHeading, petsImage, discountForm, discountButton, discountFormInput, petsImageImg } from "./styles"

function DiscountBanner() {
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    })

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormData({
            name: "",
            phone: "",
            email: "",
        })
        alert("Спасибо! Ваша скидка будет отправлена на указанный email.")
    }

    return (

        <Container>

            <div css={discountContainer}>
                <h1 css={discountHeading}>5% off on the first order</h1>

                <div css={discountContent}>
                    {/* Блок с изображением животных */}
                    <div css={petsImage}>
                        <img src="/public/imgdisc.svg" css={petsImageImg} alt="Домашние животные: собаки и кошки" />
                    </div>

                    {/* Форма для получения скидки */}
                    <form css={discountForm} onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" css={discountFormInput} value={formData.name} onChange={handleChange} required />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            css={discountFormInput}
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            css={discountFormInput}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" css={discountButton}>
                            Get a discount
                        </button>
                    </form>
                </div>
            </div>

        </Container>

    )
}

export default DiscountBanner;
