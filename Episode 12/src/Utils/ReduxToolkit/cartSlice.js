import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },

    reducers: {
        addItems : (state,action)=>{
            //(mutating) updating state direclty here
         state.items.push(action.payload)
        },
        removeItems : (state,action)=>{
          state.items.pop(action.payload)
        },
        removeAll : (state)=>{
            state.items.length = 0
        }
    }
    
})


export const{addItems,removeItems,removeAll} = cartSlice.actions;

export default cartSlice.reducer; 
