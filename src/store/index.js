import { configureStore } from '@reduxjs/toolkit'
import userRegis from './userRegis'
import productsSlice from './productsSlice'
import shopSlice from './shopSlice'
import favorSlice from './favorSlice'

export const store = configureStore({
    reducer:{
       user:userRegis,
       productsSlice,
       shopSlice,
       favorSlice
    }
})