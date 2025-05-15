// export const selectCart = store => store.cart;

// export const selectTotalCartItems = store => {
//     return store.cart.reduce((acum, item)=> acum + item.count, 0);
// };

// export const selectTotalCartPrice = store => {
//     return store.cart.reduce((acum, item) => {
//         const actualPrice = item.discont_price ?? item.price;
//         return acum + item.count * actualPrice;
//     }, 0)
// };

// export const selectUniqueCartItemsCount = store => {
//     return store.cart.length;
// };


import { createSelector } from '@reduxjs/toolkit';

// Базовый селектор - оставляем его немемоизированным
export const selectCart = state => state.cart;

// Мемоизированные селекторы для производных данных
export const selectTotalCartItems = createSelector(
    [selectCart],
    (cart) => {
        return cart.reduce((acum, item) => acum + item.count, 0);
    }
);

export const selectTotalCartPrice = createSelector(
    [selectCart],
    (cart) => {
        return cart.reduce((acum, item) => {
            const actualPrice = item.discont_price ?? item.price;
            return acum + item.count * actualPrice;
        }, 0);
    }
);

export const selectUniqueCartItemsCount = createSelector(
    [selectCart],
    (cart) => {
        return cart.length;
    }
);