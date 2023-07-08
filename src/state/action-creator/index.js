// 2 action creator 1.depositeMoney 2.withdrawMoney takes argument as amount return dispath function which is invoked within return statement  
// dispatch functoin is used to send action into our redux store

export const depositeMoney=(amount)=>{
     
    return(dispatch ) =>{
        dispatch({
            type:'deposite',
            payload:amount,
        })
}
}

export const withdrawMoney=(amount)=>{
     
    return(dispatch ) =>{
        dispatch({
            type:'withdraw',
            payload:amount,

        })
}
}