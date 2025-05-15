import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (store, { payload }) => {
            const product = store.find((item) => item.id === payload.id);
            if (product) {
                product.count += 1;
            } else {
                store.push({ ...payload, count: 1 });
            }
        },


        increaseCountInCart: (store, { payload }) => {
            // Проверяем, является ли payload объектом с id и count
            const id = payload.id !== undefined ? payload.id : payload;
            const count = payload.count || 1;
            
            const product = store.find((item) => item.id === id);
            if (product) {
                product.count += count;
            }
        },


        increaseCount(store, { payload }) {
            const { id } = payload;
            const product = store.find(item => item.id === id);
            if (product) {
                product.count += 1;
            }
        },




        
        // decreaseCountInCart: (store, { payload }) => {
        //     const index = store.findIndex((item) => item.id === payload);
        //     store[index].count -= 1;
        //     if (!store[index].count === 0) {
        //         store.splice(index, 1);
        //     }
        // },
        decreaseCountInCart: (store, { payload }) => {
            const index = store.findIndex((item) => item.id === payload);
            if (index !== -1) {
                store[index].count -= 1;
                // Исправлена логика проверки на ноль
                if (store[index].count === 0) {
                    store.splice(index, 1);
                }
            }
        },









        deleteFromCart: (store, { payload }) =>
            store.filter((item) => item.id !== payload),

        clearCart: () => [],
    },
});
// Экспортируем actions
export const {
    addToCart,
    increaseCountInCart,
    increaseCount,
    decreaseCountInCart,
    deleteFromCart,
    clearCart,
} = cartSlice.actions;
// Экспортируем reducer
export default cartSlice.reducer;
