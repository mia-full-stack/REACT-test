import {categoriesInstance} from "./backendInstance";
import requestDecorator from "./requestDecorator";


// export const getCategoriesAllApi = requestDecorator (async () => {
//     const { data } = await categoriesInstance.get("/all");
//     return data;
// })

// axios.get('http://localhost:3333/categories/all')
//     .then(response => {
//         this.setState({ categories: response.data });
//     })
//     .catch(error => {
//         console.error('There was an error fetching the categories!', error);
//     });

export const getCategoriesAll = requestDecorator(async () => {
    const { data } = await categoriesInstance.get("/all");
    return data;
});

export const getCategoriesById = requestDecorator(async (id) => {
    const { data } = await categoriesInstance.get(`/${id}`);
    return data;
});