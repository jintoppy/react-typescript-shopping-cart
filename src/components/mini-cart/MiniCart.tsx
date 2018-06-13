import * as React from 'react';
import ICartItem from '../../models/cartItem';

interface IProps {
    cart: ICartItem[]
}

class MiniCart extends React.Component<IProps>{
    public render(){
        return (
            <span>
                You have {this.props.cart.length} items in your cart
            </span>
        )
    }
}

export default MiniCart;
