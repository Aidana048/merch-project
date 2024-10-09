import { configureStore } from '@reduxjs/toolkit'
import userRegis from './userRegis'
import productsSlice from './productsSlice'
import shopSlice from './shopSlice'
import favorSlice from './favorSlice'
import dressesApi from '../api/product/dresses'

export const store = configureStore({
    reducer:{
       user:userRegis,
       productsSlice,
       shopSlice,
       favorSlice,
       [dressesApi.reducerPath] : dressesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dressesApi.middleware)
})