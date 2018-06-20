import * as React from 'react';
import IProduct from '../../models/product';
import Product from '../product/Product';

interface IProps {
    list: IProduct[],
    showLoader: boolean,
    addToCart: (prodId: number) => void,
    getProducts: () => void
}

class ProductList extends React.Component<IProps>{
    componentWillMount(){
        this.props.getProducts();
    }
    shouldComponentUpdate(nextProps: IProps): boolean{
        if(nextProps.list.length !== this.props.list.length){
            return true;
        }
        return false;
    }
    public render(){
        let loaderComponent = null;
        if(this.props.showLoader){
        loaderComponent = (
            <div className="progress">
            <div 
                className="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                aria-valuenow={75} 
                aria-valuemin={0} 
                aria-valuemax={100}
                />
            </div>
        )
        }
        const products = this.props.list.map(p => {
            return (
                <Product 
                    item={p} 
                    key={p.id} 
                    onAddToCart={this.props.addToCart}
                />
            )
        });
        return (
            <React.Fragment>
                {loaderComponent}
                <div className="row">
                    {products}
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;