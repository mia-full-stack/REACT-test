import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import CartHeader from "./CartHeader/CartHeader.jsx";
import CartItem from "./CartItem/CartItem1.jsx";
import CartCheckout from "./CartCheckout/CartCheckout.jsx";

import {
    increaseCountInCart,
    decreaseCountInCart,
    deleteFromCart,
    clearCart,
} from "../../redux/cart/cart-slice.js";

import {
    selectCart,
    selectTotalCartPrice,
} from "../../redux/cart/cart-select.js";

import Container from "../layouts/Container/Container.jsx";

const Cart = () => {
    const items = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalCartPrice);

    const dispatch = useDispatch();

    const onClearCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const onIncreaseCart = useCallback(
        (id) => {
            dispatch(increaseCountInCart(id));
        },
        [dispatch]
    );

    const onDecreaseCart = useCallback(
        (id) => {
            dispatch(decreaseCountInCart(id));
        },
        [dispatch]
    );

    const onDeleteFromCart = useCallback(
        (id) => {
            dispatch(deleteFromCart(id));
        },
        [dispatch]
    );

    const elements = items.map((item) => (
        <CartItem
            key={item.id}
            {...item}
            onIncreaseCart={onIncreaseCart}
            onDecreaseCart={onDecreaseCart}
            onDeleteFromCart={onDeleteFromCart}
        />
    ));

    return (
        <Container>
            <CartHeader onClearCart={onClearCart} />
            <div>{elements}</div>
            <CartCheckout totalPrice={totalPrice} />
        </Container>
    );
};

export default Cart;