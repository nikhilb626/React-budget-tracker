import React,{createContext,useReducer,useEffect} from "react";
import AppReducer from "./AppReducer";



// initial state
const initialState={
    expenses:[],
    budget:0
}


// create context
export const GlobalContext=createContext(initialState);



// provider component

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState,()=>{
        return JSON.parse(localStorage.getItem("expense"))
    });

    useEffect(()=>{
        localStorage.setItem("expense",JSON.stringify(state));
    },[state]);

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        });
    }


    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        });
    }


    return(
        <GlobalContext.Provider value={{
            expenses:state.expenses,addTransaction,deleteTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )



}