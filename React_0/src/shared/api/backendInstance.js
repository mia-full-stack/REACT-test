import axios from "axios";

// const backendInstance = axios.create({
//     baseURL: "https://pet-shop-backend-prx8.onrender.com/api",
// })

// export default backendInstance;

const backendInstance = axios.create({
    baseURL: 'https://petshopbackend-cnrh.onrender.com'
})

export default backendInstance;


export const productsInstance = axios.create({
    baseURL: "http://localhost:3333/products"
    
});

export const categoriesInstance = axios.create({
    baseURL: "http://localhost:3333/categories"
});

export const ordersInstance = axios.create({
    baseURL: "http://localhost:3333/orders"
});



export const localUrl = "http://localhost:3333/";