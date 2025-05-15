/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCart } from "../../redux/cart/cart-select";
import PriceInfo from "./PriceInfo/PriceInfo";
import SaleItemLabel from "./SaleItemLabel/SaleItemLabel";
import Button from "../../shared/components/Button/Button"
import Counter from "./Counter/Counter";
import ContainerProduct from "./ContainerProduct/ContainerProduct";
import Container from "../layouts/Container/Container";

import { addToCart, increaseCountInCart } from "../../redux/cart/cart-slice";
import backendInstance from "../../shared/api/backendInstance";

import styles from './SingleProduct.module.css';


const SingleProduct = ({ product }) => {
    

    const cartItems = useSelector(selectCart);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

if (!product) return null;
    const { id, title, image, price, discont_price, description } = product;


    const onPlus = () => setCount(prev => prev + 1);
    const onMinus = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
    
    const handleAddToCart = useCallback(() => {
        const itemInCart = cartItems.find(item => item.id === id);
        if (!itemInCart) {
            dispatch(addToCart({ ...product, count }));
            console.log('Добавление нового товара');
        } else {
            dispatch(increaseCountInCart({ id, count }));
            console.log('Увеличение количества товара в корзине');
        }
    }, [cartItems, id, product, count, dispatch]);


    

    

    const baseURL = backendInstance.defaults.baseURL;

    return (
        <Container>
            <div className={styles.productBox}>
                <div className={styles.mainImageBox}>
                    <img src={`${baseURL}/${image}`} alt="" />
                </div>
                <div className={styles.productInfo}>
                    <h3>{title}</h3>
                    <div className={styles.priceInfo}>
                        <PriceInfo price={price} discont_price={discont_price} />
                        {discont_price && (
                            <SaleItemLabel
                                price={price}
                                discont_price={discont_price}
                                position="static"
                                height="80%"
                            />
                        )}
                    </div>
                    <div className={styles.productOptions}>
                        <Counter plus={onPlus} minus={onMinus} count={count} />
                        <Button
                            status="true"
                            position="relative"
                            text="Add to cart"


                            // action={handleAddToCart}
                            onClick={handleAddToCart}



                        >Add to cart</ Button>
                    </div>
                    <ContainerProduct description={description} />
                </div>
            </div>
        </Container>
    );
};

export default SingleProduct;