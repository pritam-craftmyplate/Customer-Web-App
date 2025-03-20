// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import rootReducer, { rootPersistConfig } from "./rootReducer";

// // ----------------------------------------------------------------------

// const store = configureStore({
//   reducer: persistReducer(rootPersistConfig, rootReducer),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }),
// });

// const persistor = persistStore(store);

// const { dispatch } = store;

// export { dispatch, persistor, store };




import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer, { rootPersistConfig } from "./rootReducer";

// Apply persistence to the root reducer
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

// ✅ No need to export `dispatch` separately
export { persistor, store };
