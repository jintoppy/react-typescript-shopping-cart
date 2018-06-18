import * as superagent from 'superagent';
import * as React from 'react';
import ProductList from '../../components/product-list/ProductList';
import ICartItem from '../../models/cartItem';
import IProduct from '../../models/product';

interface IState {
    cart: ICartItem[];
    products: IProduct[];
    showLoader: boolean;
  };
class Home extends React.Component{
    public state : Readonly<IState> = {
        cart: [],
        products: [],
        showLoader: true
    };

    public getProducts = () => {
        superagent
          .get('https://5b209234ca762000147b254f.mockapi.io/products')
          .end((err: superagent.ResponseError, res: superagent.Response) => {
            this.setState({
              products: res.body,
              showLoader: false
            });
          });
    }

    componentWillMount(){
        this.getProducts();
    }

    public getCart = () => {
        superagent
          .get('https://5b209234ca762000147b254f.mockapi.io/cart')
          .end((err: superagent.ResponseError, res: superagent.Response) => {
            this.setState({
              cart: res.body
            });
          });
    }

    public render(){
        let loaderComponent = null;
        if(this.state.showLoader){
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
        return (
            <React.Fragment>
                <ProductList 
                    getCart={this.getCart}
                    list={this.state.products}
                />
                {loaderComponent}
            </React.Fragment>
        )
    }
}

export default Home;