import * as React from 'react';
import IProduct from '../../models/product';
import './Product.css';

interface IProps {
    item: IProduct
}
class Product extends React.Component<IProps>{
    public render(){
        return (
            <div className="col-6 product">  
                <div className="card bg-info">                    
                    <img className="card-img-top" src={this.props.item.imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.item.title}
                        </h5>
                        <p className="card-text">
                            {this.props.item.description}
                        </p>
                        <p className="card-text">
                            Price: {this.props.item.price}
                        </p>
                        <div>
                            <button className="btn btn-success">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Product;