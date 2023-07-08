import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'

//thunk is used to execute asynchronous function  
// syntax const store = createStore(reducer,initial_state,applyMiddleware(thunk))
export const store=createStore(reducers,{},applyMiddleware(thunk))