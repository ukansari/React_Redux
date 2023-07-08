import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';


const Shop = () => {
  const balance=useSelector(state=>state.amount)
  const dispatch=useDispatch();
  const action=bindActionCreators(actionCreators,dispatch)

  // const [withdrawMoney,depositeMoney]=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <div className='container'>
      {/* <button  className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Add To Card
      <button  className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button>
      */}

      {/* using bindActionCreators :- bindActionCreators is takes all the metnods from actionCreators*/}
      {/*we can write withdrawMoney instead of action.withdrawMoney same for depositeMoney   */}
      <button disabled={'true'? balance < 100 :'false' } className="btn btn-primary mx-2" onClick={()=>{action.withdrawMoney(100)}}>-</button>
       Update Balance: {balance}
      <button  className="btn btn-primary mx-2" onClick={()=>{action.depositeMoney(100)}}>+</button>

      </div>
    </div>
  )
}

export default Shop
