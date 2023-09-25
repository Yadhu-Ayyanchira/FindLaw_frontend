import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import UserSlice from "./UserSlice";
import LawyerSlice from "./LawyerSlice";

const Storage= localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")):null

const initialState = {
    userReducer: {},
    lawyerReducer: {},
};

const combineReducer= combineReducers({
    userReducer:UserSlice,
    lawyerReducer : LawyerSlice
})
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "lawyerReducer"],
};

const persistedUserReducer = persistReducer(persistConfig,combineReducer)

const Store = createStore(
        persistedUserReducer,
        initialState
)
const persistor = persistStore(Store)

export {Store,persistor}