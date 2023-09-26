import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice";
import lawyerReducer from "./LawyerSlice";

// const Storage = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : null;

const initialState = {
  userReducer: {},
  lawyerReducer: {},
};

const rootReducer = combineReducers({
  user : userReducer, 
  lawyer : lawyerReducer, // Add the lawyerReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer", "lawyerReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState, // Set the initial state here
});

const persistor = persistStore(store);

export { store, persistor };
// 