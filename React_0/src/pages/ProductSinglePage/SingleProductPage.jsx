import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import SingleProduct from "../../modules/ProductOne/SingleProduct";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import Container from "../../modules/layouts/Container/Container";

import { getProductByIdApi } from "../../shared/api/products-api";
import { getCategoriesById } from "../../shared/api/category-api";
import CustomSpinner from "../../shared/components/CustomSpinner/CustomSpinner";

const SingleProductPage = () => {
    const location = useLocation();
    const from = location.state?.from;

    const { productId, categoryId } = useParams();
    const [categoryTitle, setCategoryTitle] = useState('');

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getProductByIdApi(Number(productId));
                const dataChecked = Array.isArray(data.data) ? data.data[0] : data.data;

                setProduct(dataChecked);

                if (categoryId) {
                    const category = await getCategoriesById(categoryId);
                    setCategoryTitle(category.category?.title);
                }
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId, productId]);

    if (loading) {
        return (
            <div className="loading">
                <CustomSpinner />
            </div>
        );
    }
    if (error || !product) {
        return (
            <div>
                <p>No products are found.</p>
            </div>
        );
    }

    const breadcrumbs = [];

    if (from === 'sales') {
        breadcrumbs.push({ name: "Sales", to: "/sales" });
    } else if (categoryId && categoryTitle) {
        breadcrumbs.push({ name: "Categories", to: "/categories" });
        breadcrumbs.push({ name: categoryTitle, to: `/categories/${categoryId}` });
    } else {
        breadcrumbs.push({ name: "All Products", to: "/products" });
    }

    breadcrumbs.push({ name: product.title });

    return (
        <Container>
            <Breadcrumbs custom={breadcrumbs} />
            <SingleProduct product={product} />
        </Container>
    );
};

export default SingleProductPage;
