import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';


// for products

export const productsLoading = () =>({
    type: ActionTypes.PRODUCTS_LOADING
});

export const addProducts = (products) =>({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

export const productsFailed = (errmess) =>({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const fetchProducts = () => (dispatch) =>{
    dispatch(productsLoading(true));

    return fetch(baseUrl+'products.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
}

//  for clients !!!
export const clientsLoading = () =>({
    type: ActionTypes.CLIENTS_LOADING
});

export const addClients = (products) =>({
    type: ActionTypes.ADD_CLIENTS,
    payload: products
});

export const clientsFailed = (errmess) =>({
    type: ActionTypes.CLIENTS_FAILED,
    payload: errmess
});

export const fetchClients = () => (dispatch) =>{
    dispatch(clientsLoading(true));

    return fetch(baseUrl+'clients.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));
}

