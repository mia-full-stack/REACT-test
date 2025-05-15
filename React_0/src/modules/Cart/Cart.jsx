/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/modal-slice';
import { Link } from "react-router-dom";
// import { selectIsModalOpen } from "../../redux/modal/modal-select";

import {
    selectCart,
    selectTotalCartPrice,
    selectTotalCartItems
} from "../../redux/cart/cart-select";

import CartItem from "./CartItem/CartItem";
import Button from "../../shared/components/Button/Button";
import CartHeader from "./CartHeader/CartHeader";
import { clearCart } from "../../redux/cart/cart-slice";
import OrderForm from "../OrderForm/OrderForm";
import Container from "../../modules/layouts/Container/Container";
import Modal from "../../shared/components/Modal/Modal";

import styles from './Cart.module.css';

const Cart = () => {
    const items = useSelector(selectCart);
    
    const totalItems = useSelector(selectTotalCartItems);
const totalPrice = useSelector(selectTotalCartPrice);

    const dispatch = useDispatch();

    const elements = items
        .filter(item => item.count > 0)
        .map((item) => (
            <CartItem key={item.id} {...item} />
        ));


        const onClearCart = useCallback(() => {
            dispatch(clearCart());
        }, [dispatch]);

    return (
        <Container>
            <CartHeader onClearCart={onClearCart} />
            <div>
                {items.length === 0 ? (
                    <div className={styles.noItemsBox}>
                        <p className={styles.p}>There are currently no products in your cart..</p>
                        <Link to="/allproducts" className={styles.linkStyle}>
                            Continue shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className={styles.cartBox}>
                            <ul className={styles.ordersList}>{elements}</ul>

                            <div className={styles.orderInfo}>
                                <h3 className={styles.h3}>Order details</h3>
                                <p className={styles.totalItems}>{totalItems} items</p>
                                <div className={styles.totalPrice}>
                                    <p className={styles.totalItems}>Total</p>
                                    <p className={styles.totalBold}>${totalPrice.toFixed(2)}</p>
                                </div>
                                <OrderForm onSuccess={() => dispatch(toggleModal(true))} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

export default Cart;