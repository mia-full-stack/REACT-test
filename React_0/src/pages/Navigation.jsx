
import {Routes, Route} from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import CartPage from './CartPage/CartPage';
import CategoryPage from './CategoryPage/CategoryPage';
import CategoryOne from './CategoryOne/CategoryOne';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import ProductItemPage from './ProductItemPage/ProductItemPage';
import SaleProductsPage from './SaleProductsPage/SaleProductsPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/categories/:category" element={<CategoryOne />} />
            {/* <Route path="/categories/:category/:subcategory" element={<CategoryOne />} /> */}
            <Route path="/allproducts" element={<AllProductsPage />} />
            <Route path="/allproducts/:category" element={<AllProductsPage />} />
            {/* <Route path="/allproducts/:category/:subcategory" element={<AllProductsPage />} /> */}
            <Route path="/product" element={<ProductItemPage />} />
            <Route path="/sales" element={<SaleProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    );
}
export default Navigation;
