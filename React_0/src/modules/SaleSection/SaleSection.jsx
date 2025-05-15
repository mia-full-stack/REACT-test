/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import Container from "../../modules/layouts/Container/Container";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import SaleCard from "../../shared/components/SaleCard/SaleCard";

import useFetch from "../../shared/hooks/useFetch";
import { addToCart } from "../../redux/cart/cart-slice";

import { getSaleProductsApi } from "../../shared/api/sale-api";

import { popularProductsStyle, productListStyle } from "./styles";

const AllSale = ({ limit }) => {
    const { data: products, loading, error } = useFetch({
        request: getSaleProductsApi,
        initialData: [],
    });

    const productsSale = products.filter(product => product.discont_price !== null);

    // Ограничиваем количество категорий, если передан limit
    const displayedSale = limit ? productsSale.slice(0, limit) : productsSale;

    const dispatch = useDispatch();

    const onAddProductToCart = useCallback(
        (payload) => {
            dispatch(addToCart(payload));
        },
        [dispatch]
    );

    const elements = displayedSale?.map((item) => (
        <SaleCard
            onAddProductToCart={onAddProductToCart}
            key={item.id} {...item} />
    ));

    return (

        <Container>
            <div css={popularProductsStyle}>
                <Loader loading={loading} />
                {error && <LoadingError>{error}</LoadingError>}
                {/* {Boolean(products.length) && (
                    <div css={productListStyle}>{elements}</div>
                )} */}

                {Array.isArray(products) && products.length > 0 && (
                    <div css={productListStyle}>{elements}</div>
                )}
            </div>
        </Container>

    );
}
export default AllSale;