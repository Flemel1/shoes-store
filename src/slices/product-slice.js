import { createSlice } from "@reduxjs/toolkit";
import { products } from "../consts/variables";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: products,
        wishList: [],
    },
    reducers: {
        searchProduct(state, payload) {
            const keyword = payload.payload;
            if (keyword === '') {
                state.products = products
            } else {
                const productFilter = [];
                products.forEach((product) => {
                    const isContain = product.name.toLowerCase().includes(keyword);
                    if (isContain) {
                        productFilter.push(product);
                    }
                });

                if (productFilter.length !== 0) {
                    state.products = productFilter;
                }
            }
        }
    }
})

export const productActions = productSlice.actions;

export default productSlice;