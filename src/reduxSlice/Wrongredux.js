import { createSlice } from "@reduxjs/toolkit";

const Wrongredux=createSlice({
    initialState:{
        score:0,
    },
    name:"wrongScore",
    reducers:{
        wrongFunct:(state, {payload})=>{
            state={
                score:state.score+payload
            }
            return state
        }
    }
})

export const wrongReducer=Wrongredux.reducer
export const { wrongFunct}= Wrongredux.actions