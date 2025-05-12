
import {productsInstance} from "./backendInstance";

import requestDecorator from "./requestDecorator";

export const getSaleProductsApi = requestDecorator(async () => {
    const { data } = await productsInstance.get("/all");
    return data;
})

// export const getProductById = requestDecorator(async (id) => {
//     const { data } = await backendInstance.get(`/products/${id}`);
//     return data.data;
// })

// export const getProductsAll = requestDecorator(async () => {
//     const { data } = await categoriesInstance.get("/all");
//     return data;
// });