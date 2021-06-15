import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Clients } from "./clients";
import { Products } from "./products";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            clients: Clients
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}