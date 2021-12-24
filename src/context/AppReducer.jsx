export default (state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                expenses:[action.payload,...state.expenses]
            };
            case "DELETE_TRANSACTION":
                return{
                    ...state,
                    expenses:state.expenses.filter(expenses=>expenses.id!==action.payload)
                };
           
            default:
                return state;
    }
}