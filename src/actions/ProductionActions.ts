import * as superagent from 'superagent';
import AppDispatcher from '../AppDispatcher';
import actionTypes from '../actionTypes';
import IProduct from '../models/product';

export const getProducts = () => {
    AppDispatcher.dispatch({
        type: actionTypes.GET_PRODUCTS
    });
    superagent
        .get('https://5b209234ca762000147b254f.mockapi.io/products')
        .end((err: superagent.ResponseError, res: superagent.Response) => {
            if(err){
                AppDispatcher.dispatch({
                    type: actionTypes.GET_PRODUCTS_ERROR
                });
            }
            else{
                AppDispatcher.dispatch({
                    type: actionTypes.GET_PRODUCTS_SUCCESS,
                    payload: res.body
                });
            }
        
        });
};

export const getProduct = (productId: string) => {
    AppDispatcher.dispatch({
        type: actionTypes.GET_PRODUCT
    });
    const url = `http://5b209234ca762000147b254f.mockapi.io/products/${productId}`;
    superagent
    .get(url)
    .end((err: superagent.ResponseError, res: superagent.Response) => {
        if(err){
            AppDispatcher.dispatch({
                type: actionTypes.GET_PRODUCT_FAILED
            });
        }
        else {
            AppDispatcher.dispatch({
                type: actionTypes.GET_PRODUCT_SUCCESS,
                payload: res.body
            });
        }
        
    });
};

export const addProduct = (product: IProduct) => {
    AppDispatcher.dispatch({
        type: actionTypes.ADD_PRODUCT
    });
    superagent
        .post('http://5b209234ca762000147b254f.mockapi.io/products')
        .send(product)
        .set('accept', 'json')
        .end(() => {
            AppDispatcher.dispatch({
                type: actionTypes.ADD_PRODUCT_SUCCESS
            });
        });
};