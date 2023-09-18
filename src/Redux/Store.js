import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import UserSlice from "./UserSlice";
import LawyerSlice from "./LawyerSlice";

const persistConfig = {
    key : "root",
    storage
};

const persistedUserReducer = persistReducer(persistConfig,UserSlice)
const persistedLawyerReducer = persistReducer(persistConfig,LawyerSlice)

const Store = configureStore({
    reducer : {
        user : persistedUserReducer,
        lawyer : persistedLawyerReducer
    }
})
const persistor = persistStore(Store)

export {Store,persistor}