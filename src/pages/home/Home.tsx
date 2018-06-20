import {Container} from 'flux/utils';
import * as React from 'react';
import ProductList from '../../components/product-list/ProductList';
import ProductStore from '../../stores/ProductStore';
import IProduct from '../../models/product';
import { getProducts } from '../../actions/ProductionActions';
import { addToCart } from '../../actions/CartActions';

interface IState {
    products: IProduct[],
    isRequestPending: boolean
}

class Home extends React.Component<{}, IState>{
    public static getStores() {
        return [
            ProductStore
        ];
    }

    public static calculateState(): IState {
        const productStoreState = ProductStore.getState();
        return {
            products: productStoreState.products,
            isRequestPending: productStoreState.productRequestPending
        };
    }

    public render(){
        return (
                <ProductList 
                    getProducts={getProducts}
                    addToCart={addToCart}
                    showLoader={this.state.isRequestPending}
                    list={this.state.products}
                />
        )
    }
}

export default Container.create(Home);