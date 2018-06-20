import IProduct from './product';
import ICartItem from './cartItem';

export interface IAction {
    type: string,
    payload?: IProduct[] | IProduct | ICartItem[]
}

