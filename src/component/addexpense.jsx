import React,{useState,useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const Addexpense = () => {
    const [name,setName]=useState("");
    const [amount,setAmount]=useState(0);


    const {addTransaction}=useContext(GlobalContext);


    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*1000000),
            name,
            amount:+amount
        }

        if(name==="" || amount===0){
            console.log("error please fill all the inputs");
        }
        else{
            addTransaction(newTransaction);
            setName("");
            setAmount(0);
        }

    }


    return (
        <>
     <div className="expense_heading">Add Expenses</div>   

     <div className="add">
         <input type="text" placeholder="Expense name" value={name} onChange={(e)=>setName(e.target.value)} />
         <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
         <button onClick={onSubmit}>Save</button>
     </div>    
        </>
    )
}

export default Addexpense;
