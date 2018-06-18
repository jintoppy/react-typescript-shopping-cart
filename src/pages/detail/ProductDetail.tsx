import * as superagent from 'superagent';
import * as React from 'react';
import IProduct from '../../models/product';

interface IProps{
    match: {
        params: {
            productId: string
        }
    }
}

interface IState {
    productDetail: IProduct
}

class ProductDetail extends React.Component<IProps>{
    public state: Readonly<Partial<IState>> = {
        productDetail: undefined
    };
    componentWillMount(){
        const url = `http://5b209234ca762000147b254f.mockapi.io/products/${this.props.match.params.productId}`;
        superagent
        .get(url)
        .end((err: superagent.ResponseError, res: superagent.Response) => {
            this.setState({
                productDetail: res.body
            });
        });
    }
    public render(){
        return (
            <div>
                This is the detail page of {this.props.match.params.productId}
                <p>Name: {this.state.productDetail ? this.state.productDetail.title: 'Product Details are loading'}</p>
            </div>
        )
    }
}

export default ProductDetail;