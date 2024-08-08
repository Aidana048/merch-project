import { createSlice } from '@reduxjs/toolkit'

const initialState={
    shop:[]
}
export const shopSlice=createSlice({
    name:"shop",
    initialState,
    reducers:{
        addToShop:(state,action)=>{
            let idx =state.shop.findIndex((el)=>{
               
                return el.id===action.payload.id})
            if(idx>=0){
              

                state.shop=state.shop.map((el)=>{
                    if(el.id===action.payload.id && el.targetSize === action.payload.targetSize ){
                        return {...el,count:el.count+1}
                    }
                    else{
                        return el 
                    }
            })
            }
            else{
                state.shop=[...state.shop,action.payload]
            }
        },
        deleteShop:(state,action)=>{
            state.shop=state.shop.filter((el)=>{
                console.log(action.payload);
                return el.id !== action.payload.id
            })
        }
    }
})

export default shopSlice.reducer
export const {addToShop, deleteShop}=shopSlice.actions