import CategoriesOne from "../../modules/CategoriesOne/CategoriesOne";


import Container from "../../modules/layouts/Container/Container";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
// import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import { useParams } from "react-router-dom";


const CategoryOne = () => {
    const { category } = useParams();

    return (
        <Container>
            
            <CategoriesOne categoryId={category}/>

        </Container>
    );
}
export default CategoryOne;