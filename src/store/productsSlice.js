import {createSlice} from "@reduxjs/toolkit";
const initialState={
    data:[],
    error:"",
    loading:"",
    filter:{}
}
export const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        getAllProducts:(state,action)=>{
            state.data=action.payload
        }
    }
})
export const {getAllProducts}=productsSlice.actions
export default productsSlice.reducer
