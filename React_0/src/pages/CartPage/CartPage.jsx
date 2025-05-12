
import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import Cart from "../../modules/Cart/Cart";



const CartPage = () => {
    return (
        <Container>
            <SectionTitle title="Shopping cart"></SectionTitle>

            <Cart />
        </Container>
    );
}
export default CartPage;