import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import authReducer from "./Auth/auth.reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import carReducer from "./Cars/cars.reducer";
import userReducer from "./Users/user.reducer";

const rootReducers = combineReducers({
  AuthManager: authReducer,
  CarManager: carReducer,
  UserManager: userReducer,
});

const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
