import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    user:{
        name:"",
        email:"",
        password:""
    }
}
export const userRegis = createSlice({
    name:"user",
    initialState,
    reducers:{
        regisUser:(state,action)=>{
            state.user=action.payload
        },
        logOut:(state,action)=>{
            state.user=''
        }
    }
})

export const {regisUser, logOut } = userRegis.actions
export default userRegis.reducer
