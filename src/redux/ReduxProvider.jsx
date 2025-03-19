
'use client'
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "react-hot-toast";

import { store, persistor } from "./store";


const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={'...loading'} persistor={persistor}>
                <Toaster />
                {children}
            </PersistGate>
        </Provider>
    );
};

export default ReduxProvider;