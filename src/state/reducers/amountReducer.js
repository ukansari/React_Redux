//here reducer as a reducer function that takes two parameters state and action .Here state is a amount where we have to update the amount/state value 
// second is action which has two things 1.type 2.payload we check condition according to action`s type  

const reducer=(state=0,action)=>{
        if(action.type==='deposite'){
            return state + action.payload
        }
        else if (action.type==='withdraw') {
            return state - action.payload
        }
        else{
            return state;
        }
}
export default reducer;
