import * as React from 'react';
import * as superagent from 'superagent';
import IProduct from '../../models/product';
import Product from '../product/Product';

interface IProps {
    list: IProduct[],
    getCart: Function
}

class ProductList extends React.Component<IProps>{
    public addToCart = (productId: number) => {
        superagent
            .post('https://5b209234ca762000147b254f.mockapi.io/cart')
            .send({
                productId,
                quantity: 1
            })
            .set('accept', 'json')
            .end(() => {
                alert('Added successfully');
                this.props.getCart();
            });
    }
    shouldComponentUpdate(nextProps: IProps): boolean{
        if(nextProps.list.length !== this.props.list.length){
            return true;
        }
        return false;
    }
    public render(){
        const products = this.props.list.map(p => {
            return (
                <Product 
                    item={p} 
                    key={p.id} 
                    onAddToCart={this.addToCart}
                />
            )
        });
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

export default ProductList;