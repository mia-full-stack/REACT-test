
import SaleSection from "../../modules/SaleSection/SaleSection";

import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";


const SaleProductsPage = () => {
    return (
        <Container>
            <SectionTitle title="Sale Products" />
            <SaleSection />
        </Container>
    );
}
export default SaleProductsPage;