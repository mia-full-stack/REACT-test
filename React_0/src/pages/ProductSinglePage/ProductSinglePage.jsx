/** @jsxImportSource @emotion/react */

import ProductCard from "../../shared/components/ProductCard/ProductCard";


import Container from "../../modules/layouts/Container/Container";

import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
// import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { useParams } from "react-router-dom";


const ProductSinglePage = () => {
    const { product } = useParams();
    const breadcrumbs = [];
    return (
        <Container>
            <Breadcrumbs custom={breadcrumbs} />
            <ProductCard productId={product} />

        </Container>
    );
}
export default ProductSinglePage
    ;
