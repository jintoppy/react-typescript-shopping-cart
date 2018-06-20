import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import ICartItem from '../models/cartItem';
import { IAction } from '../models/state';
import actionTypes from '../actionTypes';

interface IState {
    cart: ICartItem[]
}

class CartStore extends ReduceStore<IState, IAction> {
    constructor(){
        super(AppDispatcher);
    }

    public getInitialState(): IState {
        return {
            cart: []
        };
    }

    public reduce(state: IState, action: IAction): IState {
        switch(action.type){
            case actionTypes.GET_CART_SUCCESS:
                return {
                    ...state,
                    cart: action.payload as ICartItem[]
                };
            default:
                return state;
        }

    }
}

export default new CartStore();