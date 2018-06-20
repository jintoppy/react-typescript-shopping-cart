import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import IProduct from '../models/product';
import { IAction } from '../models/state';
import actionTypes from '../actionTypes';

interface IState {
    products: IProduct[],
    selectedProduct?: IProduct,
    productRequestPending: boolean
}

class ProductStore extends ReduceStore<IState, IAction> {
    constructor(){
        super(AppDispatcher);
    }

    public getInitialState(): IState {
        return {
            products: [],
            selectedProduct: undefined,
            productRequestPending: false
        };
    }

    public reduce(state: IState, action: IAction): IState {
        switch(action.type){
            case actionTypes.GET_PRODUCTS:
                return {
                    ...state,
                    productRequestPending: true
                };
            case actionTypes.GET_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    products: action.payload as IProduct[],
                    productRequestPending: false
                };
            case actionTypes.GET_PRODUCT_SUCCESS:
                return {
                    ...state,
                    selectedProduct: action.payload as IProduct
                };
            default:
                return state;
        }

    }
}

export default new ProductStore();