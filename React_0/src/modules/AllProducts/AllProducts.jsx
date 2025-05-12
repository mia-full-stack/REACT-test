/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import ProductCard from "../../shared/components/ProductCard/ProductCard";

import useFetch from "../../shared/hooks/useFetch";
import { addToCart } from "../../redux/cart/cart-slice";

import { getAllProductsApi } from "../../shared/api/products-api";

import { popularProductsStyle, productListStyle } from "./styles";

const AllProducts = () => {
    const { data: products, loading, error } = useFetch({
        request: getAllProductsApi,
        initialData: [],
    });


    const dispatch = useDispatch();

    const onAddProductToCart = useCallback(
        (payload) => {
            dispatch(addToCart(payload));
        },
        [dispatch]
    );



    const elements = products?.map((item) => (
        <ProductCard 
        onAddProductToCart={onAddProductToCart}
        key={item.id} {...item} />
    ));

    return (
        <div css={popularProductsStyle}>

            <Container>
                <SectionTitle title="All products"></SectionTitle>

                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {/* {Boolean(products.length) && (
                    <div css={productListStyle}>{elements}</div>
                )} */}

                {Array.isArray(products) && products.length > 0 && (
                    <div css={productListStyle}>{elements}</div>
                )}

            </Container>
        </div>
    );
}
export default AllProducts;