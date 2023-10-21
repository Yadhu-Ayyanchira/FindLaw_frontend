import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserSlice";
import lawyerReducer from "./LawyerSlice";

// const Storage = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : null;

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    mobile: "",
    is_admin: "",
    image: "",
  },
  lawyer: {
    id: "",
    name: "",
    email: "",
    mobile: "",
    verified: false,
    experience: 0,
    about: "About your self",
    image: "",
  },
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
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE,PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor }; 