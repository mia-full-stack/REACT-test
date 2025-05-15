/** @jsxImportSource @emotion/react */

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Container from "../layouts/Container/Container";
// import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import CategoryCard from "../../shared/components/CategoryCard/CategoryCard";

// import  Button  from "../../shared/components/Button/Button";

import useFetch from "../../shared/hooks/useFetch";

// импортируем API
// import { getCategoriesAllApi } from "../../shared/api/category-api";
import { getCategoriesAll } from "../../shared/api/category-api";

import { popularProductsStyle, productListStyle } from "./styles";

const Categories = ({ limit }) => {


    const { data: categories, loading, error } = useFetch({
        request: getCategoriesAll,
        initialData: [],
    });

    // Ограничиваем количество категорий, если передан limit
    const displayedCategories = limit ? categories.slice(0, limit) : categories;

    const elements = displayedCategories.map((item) => (
        <CategoryCard key={item.id} {...item} />
    ));

    return (

        <div css={popularProductsStyle}>


            <Container>

                {/* <SectionTitle title="Categories"></SectionTitle> */}
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {/* {Boolean(displayedCategories.length) && (
                    <div css={productListStyle}>{elements}</div>
                )} */}

                {Boolean(displayedCategories.length) && (
                    <>
                        <div css={productListStyle}>{elements}</div>

                        {/* Показываем кнопку только если есть ограничение и есть скрытые категории */}
                        {/* {limit && categories.length > limit && (
                            <Link to="/categories">
                                <Button css={viewAllButtonStyle}>Смотреть все категории</Button>
                            </Link>
                        )} */}


                        {/* {limit && categories.length > limit && (
                            <a href="/categories" css={viewAllButtonStyle}>
                            Смотреть все категории
                        </a>
                        )} */}


                    </>
                )}

                {/* <CategoryCard /> */}

            </Container>
        </div>
    );
}
export default Categories;