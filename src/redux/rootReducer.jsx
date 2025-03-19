// rootReducer.jsx
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";



export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [], // Add slices you want to persist
};

const rootReducer = combineReducers({
  
});

export default rootReducer; // Default export