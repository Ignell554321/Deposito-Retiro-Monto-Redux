import { createSlice } from "@reduxjs/toolkit";

const initialState=0;

export const montoSlice=createSlice({
    name:'monto',
    initialState:{value:initialState},
    reducers:{
        depositar:(state,action)=>{
            state.value=state.value+action.payload
            alert(`Has depositado: ${action.payload} soles`);
        },
        retirar:(state,action)=>{
            if(state.value===0)
            {
                state.value=0;
                alert('Error, no se pudo realizar el retiro pues no tiene saldo disponible');
            }else if(state.value<action.payload){
                alert('Error, el monto a retirar es mayor al monto actual, verifica por favor...');
                state.value=state.value;
            }else{
                state.value=state.value-action.payload;
            }
        }
    }
}) 

export const {depositar, retirar}=montoSlice.actions;
export default montoSlice.reducer;