import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Clients } from "./clients";
import { Products } from "./products";
import {createForms} from 'react-redux-form';
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            clients: Clients,
            ...createForms({
                user: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}