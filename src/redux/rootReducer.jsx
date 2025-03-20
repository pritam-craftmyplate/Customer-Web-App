// rootReducer.jsx
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import platterReducer from "./slice/platterSlice"



export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["platter"], // Add slices you want to persist
};

const rootReducer = combineReducers({
  platter: platterReducer
});

export default rootReducer; // Default export