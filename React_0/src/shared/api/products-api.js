
import {productsInstance} from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const getAllProductsApi = requestDecorator(async () => {
    const { data } = await productsInstance.get("/all");
    return data;
})

export const getProductByIdApi = requestDecorator(async (id) => {
    const { data } = await productsInstance.get(`/${id}`);
    return data;
})

// export const getProductsAll = requestDecorator(async () => {
//     const { data } = await categoriesInstance.get("/all");
//     return data;
// });