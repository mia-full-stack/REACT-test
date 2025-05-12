import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    // getAllProductsApi,
    getProductByIdApi,
} from "../../shared/api/products-api";


export const addProductToCart = createAsyncThunk(
    "product/add",
    async (payload, { rejectWithValue }) => {
        try {
            const data = await getProductByIdApi(payload);
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
);

// export const deleteProductFromCart = createAsyncThunk(
//     "product/delete",
//     async (id, { rejectWithValue }) => {
//         try {
//             await deleteProductApi(id);
//             return id;
//         } catch (error) {
//             return rejectWithValue(error?.response?.data?.message);
//         }
//     }
// );

// export const clearCart = createAsyncThunk(
//     "cart/clear",
//     async (_, { rejectWithValue }) => {
//         try {
//             // await clearCartApi();
//             return [];
//         } catch (error) {
//             return rejectWithValue(error?.response?.data?.message);
//         }
//     }
// );  