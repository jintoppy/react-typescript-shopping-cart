import * as superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import MiniCart from './components/mini-cart/MiniCart';
import ProductList from './components/product-list/ProductList';
import ICartItem from './models/cartItem';
import IProduct from './models/product';


interface IState {
  cart: ICartItem[];
  products: IProduct[];
  showLoader: boolean;
};

class App extends React.Component<{}, IState> {  
  public state : Readonly<IState> = {
    cart: [],
    products: [],
    showLoader: true
  };

  componentDidMount(){
    console.log('inside componentDidMount');
  }

  componentDidUpdate(){
    console.log('inside componentDidUpdate');
  }

  public getCart = () => {
    superagent
      .get('https://5b209234ca762000147b254f.mockapi.io/cart')
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        this.setState({
          cart: res.body
        });
      })
  }

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
    console.log('inside componentWillMount');
    this.getProducts();
    this.getCart();
  }

  public render() {
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
      <div className="container">
        <nav className="site-header sticky-top row">
          <div className="col-4">
            <h3>Food App</h3>
          </div>          
          <div className="col-4">
              <MiniCart cart={this.state.cart} />
          </div>
        </nav>
        <div className="container">            
            <ProductList list={this.state.products} />
            {loaderComponent}
        </div>
      </div>
    );
  }
}

export default App;

