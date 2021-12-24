import React,{useState,useContext,useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";

const Balance = () => {

    const {expenses}=useContext(GlobalContext);


    const [toggle,setToggle]=useState(false);

    const getInit=()=>{
        const localData=localStorage.getItem("balance");
        return localData?JSON.parse(localData):0;
    }

    const [budget,setBudget]=useState(getInit());

    useEffect(()=>{
        localStorage.setItem("balance",JSON.stringify(budget));
    },[budget]);
 
    const spend=expenses.map((transaction)=>{
    
    return(transaction.amount) 
    });

    const spendTotal=spend.reduce((acc,item)=>(acc+=item),0);

    

    const remain=parseInt(budget)-parseInt(spendTotal);


    const editHandle=()=>{
        setToggle(true);

    }

    const doneHandle=()=>{
        setToggle(false);

    }

 


    return (
        <>
         <div className="balance_container">
             <div className="budget">{toggle?<div className="editing"> <input type="number" value={budget} onChange={(e)=>setBudget(e.target.value)} /><button onClick={doneHandle}>done</button></div>: <div className="edited"><span>Budget : </span>${budget}<button onClick={editHandle}>edit</button></div>}
             
               
             </div>
             <div className="remaining">Remaining : ${remain}</div>
             <div className="spent">Spent : ${spendTotal}</div>
         </div>   
        </>
    )
}

export default Balance;
