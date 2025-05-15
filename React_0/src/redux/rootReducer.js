import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-slice";
import modalReducer from "./modal/modal-slice";
import productsReducer from "./product-slice";

const rootReducer = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
    products: productsReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
