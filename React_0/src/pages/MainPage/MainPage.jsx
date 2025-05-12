
import Container from "../../modules/layouts/Container/Container";


import Hero from "../../modules/Hero/Hero";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
// import ProductCard from "../../shared/components/ProductCard/ProductCard";
import DiscountBanner from "../../modules/DiscountBanner/DiscountBanner";
import SaleSection from "../../modules/SaleSection/SaleSection";

import Categories from "../../modules/Categorys/AllCategory";


const MainPage = () => {
    return (
        <>
            <Container>
                <Hero />
                {/* <SectionTitle title="Главная страница"></SectionTitle> */}
                {/* <Categories /> */}
                <Categories limit={4} />
                <DiscountBanner />
                <SaleSection limit={4}/>

            </Container>
        </>

    );
}
export default MainPage;