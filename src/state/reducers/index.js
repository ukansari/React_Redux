// combine all reducers into one reducer fnction 
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducer=combineReducers({
    // ( state = reducer`s return value ) here amount is a state
    amount:amountReducer
})
export default reducer ;