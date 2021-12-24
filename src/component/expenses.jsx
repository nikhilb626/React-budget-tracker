import React,{useContext,useState} from 'react';
import {GlobalContext} from "../context/GlobalState";

const Expenses = () => {

  const {expenses} = useContext(GlobalContext);
  const {deleteTransaction}=useContext(GlobalContext);


    const [search,setSearch]=useState("");


    return (
        <>
        <div className="expense_heading">Expenses</div>
        <div className="search"><input  type="text" placeholder="search expense . . ." onChange={(e)=>setSearch(e.target.value)} /></div>
       

        <div className="expense_list">
        <ul>
      {
        expenses.filter((expense)=>{
          if(search===""){
            return expense
          }
          else if(expense.name.toLowerCase().includes(search.toLowerCase())){
            return expense
          }
        }).map(expense=>{
          return(
            <li><span className="expname">{expense.name}</span> <span className="exp">${expense.amount}</span> <div className="deleteBtn" onClick={()=>deleteTransaction(expense.id)} >X</div></li>
          )
        })
      }

      </ul>
        </div>
        </>
    )
} 

export default Expenses;
