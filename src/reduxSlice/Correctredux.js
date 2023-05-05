import { createSlice } from "@reduxjs/toolkit";

const Correctredux= createSlice({
    initialState:{
        score:0,
    },
    name:"correctScore",
    reducers:{
        correctFunct: (state, {payload})=>{
            state={
                score:state.score+payload
            }
            return state
        }
    }
})

export const scoreReducer=Correctredux.reducer
export const {correctFunct}=Correctredux.actions