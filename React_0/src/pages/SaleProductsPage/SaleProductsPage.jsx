
import SaleSection from "../../modules/SaleSection/SaleSection";

import Container from "../../modules/layouts/Container/Container";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";


const SaleProductsPage = () => {
    return (
        <Container>
            <Breadcrumbs custom={[{ name: "All sales", to: "/sales" }]} />
            <SectionTitle title="Discounted products" />
            <SaleSection />
        </Container>
    );
}
export default SaleProductsPage;