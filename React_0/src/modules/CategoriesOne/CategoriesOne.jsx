/** @jsxImportSource @emotion/react */
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Container from "../layouts/Container/Container";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import useFetch from "../../shared/hooks/useFetch";
import { addToCart } from "../../redux/cart/cart-slice";

import ProductCard from "../../shared/components/ProductCard/ProductCard";

// import  Button  from "../../shared/components/Button/Button";


// импортируем API
// import { getAllProductsApi } from "../../shared/api/products-api";
// import {getProductByIdApi} from "../../shared/api/products-api";
import { getCategoriesById } from "../../shared/api/category-api";
import { popularProductsStyle, productListStyle, viewAllButtonStyle } from "./styles";

const CategoriesOne = ({ limit, categoryId = 1 }) => {


    const requestWithId = useCallback(() => getCategoriesById(categoryId), [categoryId]);

    const { data: apiResponse, loading, error: fetchError } = useFetch({
        request: requestWithId,
        initialData: { data: null, error: null },
    });




// вытягиваю название категории для Breadcrumbs
    const [categoryTitle, setCategoryTitle] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                setCategoryTitle(apiResponse?.category?.title);
            }
            catch (error) {
                setCategoryTitle(error.message);
            }
        };
        fetchData();
    }, [apiResponse]);


    const dispatch = useDispatch();

    const onAddProductToCart = useCallback(
        (payload) => {
            dispatch(addToCart(payload));
        },
        [dispatch]
    );
    // Проверяем наличие ошибки в ответе API
    const error = fetchError || apiResponse?.error;

    // Извлекаем данные из ответа API
    const responseData = apiResponse?.data;

    // Извлекаем информацию о категории и товарах
    // const category = responseData?.category || {};
    // const products = responseData?.data || [];
    
    const { data = [], category = {} } = apiResponse;
    // Ограничиваем количество категорий, если передан limit
    const displayedCategoriesOne = limit ? data.slice(0, limit) : data;
    // console.log(apiResponse);


    // Создаем элементы карточек товаров
    const elements = Array.isArray(displayedCategoriesOne)
        ? displayedCategoriesOne.map((item) => (
            <ProductCard
                onAddProductToCart={onAddProductToCart}
                key={item.id}
                {...item}
            />
        ))
        : null;

    return (

        <div css={popularProductsStyle}>
            <Container>
            <Breadcrumbs
                custom={[
                    { name: "Categories", to: "/categories" },
                    { name: categoryTitle, to: `/categories/${categoryId}` }
                ]}
            />

                {/* <SectionTitle title="One category"></SectionTitle> */}
                <SectionTitle title={category?.title || "One category"}></SectionTitle>
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {/* {Boolean(displayedCategories.length) && (
                    <div css={productListStyle}>{elements}</div>
                )} */}

                {/* {Boolean(displayedCategoriesOne.length) && (
                    <>
                        <div css={productListStyle}>{elements}</div>
                        {limit && products.length > limit && (
                            // <a href="/categories/" css={viewAllButtonStyle}>

                            <a href={`/categories/${categoryId}`} css={viewAllButtonStyle}>
                                Смотреть все категории
                            </a>
                        )}
                    </>
                )} */}
                {Array.isArray(displayedCategoriesOne) && displayedCategoriesOne.length > 0 ? (
                    <>
                        <div css={productListStyle}>{elements}</div>
                        {limit && products.length > limit && (
                            <a href={`/categories/${categoryId}`} css={viewAllButtonStyle}>
                                Смотреть все товары в категории
                            </a>
                        )}
                    </>
                ) : (
                    !loading && !error && <p>В данной категории нет товаров</p>
                )}



            </Container>
        </div>
    );
}
export default CategoriesOne;