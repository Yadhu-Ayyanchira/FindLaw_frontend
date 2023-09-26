import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice";
import lawyerReducer from "./LawyerSlice";

// const Storage = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : null;

const initialState = {
  user: null, 
  lawyer: null, 
};

const rootReducer = combineReducers({
  user : userReducer, 
  lawyer : lawyerReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "lawyer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
});

const persistor = persistStore(store);

export { store, persistor }; 