import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import AccountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;


