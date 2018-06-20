import * as superagent from 'superagent';
import AppDispatcher from '../AppDispatcher';
import actionTypes from '../actionTypes';

export const getCart = () => {
    AppDispatcher.dispatch({
        type: actionTypes.GET_CART
    });

    superagent
      .get('https://5b209234ca762000147b254f.mockapi.io/cart')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        if(err){
            AppDispatcher.dispatch({
                type: actionTypes.GET_CART_FAILED
            });
        }
        else {
            AppDispatcher.dispatch({
                type: actionTypes.GET_CART_SUCCESS,
                payload: res.body
            });
        }
      });
};

export const addToCart = (productId: number) => {
    AppDispatcher.dispatch({
        type: actionTypes.ADD_TO_CART
    });
    superagent
        .post('https://5b209234ca762000147b254f.mockapi.io/cart')
        .send({
            productId,
            quantity: 1
        })
        .set('accept', 'json')
        .end(() => {
            AppDispatcher.dispatch({
                type: actionTypes.ADD_TO_CART_SUCCESS
            });
            getCart();
        });
};