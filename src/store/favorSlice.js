import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favors: []
}

const favorSlice = createSlice({
    name: 'favor',
    initialState,
    reducers: {
        addToFavor: (state, action) => {
            if (state.favors.some(el => el.id === action.payload.id)) {
                state.favors = [...state.favors.filter(el => el.id !== action.payload.id)]
            } else {
                state.favors = [...state.favors, action.payload]
            }
        },
        deleteFromFavor: (state, action) => {
            state.favors = state.favors.filter(product => product.id !== action.payload.id)
        }
    }
})

export const { addToFavor, deleteFromFavor } = favorSlice.actions
export default favorSlice.reducer