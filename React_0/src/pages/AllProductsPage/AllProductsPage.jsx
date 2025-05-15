/** @jsxImportSource @emotion/react */
import Container from "../../modules/layouts/Container/Container";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";

import AllProducts from "../../modules/AllProducts/AllProducts";

const AllProductsPage = () => {

    return (
        <Container>

            <Breadcrumbs custom={[{ name: "All Products", to: "/products" }]} />

            <AllProducts />

        </Container>

    );
}
export default AllProductsPage;