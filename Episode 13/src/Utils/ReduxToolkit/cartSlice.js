import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },

    reducers: {
        addItems : (state,action)=>{
        
            //older vanila Redux we can not mutate state directly 
            //const newState = [...state]
            //newState.items.push(action.payload)
            //return newState
            //like this we need to update the state which is very hectic 


            //but in new version i.e Redux ToolKit(RTK) that problem is solved
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
