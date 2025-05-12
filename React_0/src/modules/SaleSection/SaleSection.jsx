/** @jsxImportSource @emotion/react */

import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Loader from "../../shared/components/Loader/Loader";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import SaleCard from "../../shared/components/SaleCard/SaleCard";

import useFetch from "../../shared/hooks/useFetch";

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


    const elements = displayedSale?.map((item) => (
        <SaleCard key={item.id} {...item} />
    ));

    return (
        <div css={popularProductsStyle}>

            <Container>
                <SectionTitle title="All sale"></SectionTitle>

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
export default AllSale;