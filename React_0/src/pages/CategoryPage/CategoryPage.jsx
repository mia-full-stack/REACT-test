/** @jsxImportSource @emotion/react */


import Categories from "../../modules/Categorys/AllCategory";


import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";


const CategoryPage = () => {
    return (
        <Container>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <SectionTitle title="Categories" />
            {/* <SectionTitle title="Categories" /> */}
            {/* <LinkMain to="/categories" title="Categories" text="Back to categories" /> */}
            {/* <QuickLink to="/categories" title="Categories" text="Back to categories" /> */}
            {/* <LinkMain to="/categories" title="Categories" text="Back to categories" /> */}  
            <Categories />

        </Container>
    );
}
export default CategoryPage;