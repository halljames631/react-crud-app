import React, { Component } from 'react'
import Product from '../components/Product';
import { getAllProducts } from '../Api';

class Products extends Component {
    state = { 
        isLoading: true,
        products: []
     };
    componentDidMount() {
        getAllProducts()
        .then(products=>{
                setTimeout(()=>{
                    this.setState({
                        products: products,
                        isLoading: false
                    })
                }, 700)
            })
        
    }
    render() { 
        return ( 
            <div>
                <h1>Products Page</h1>
                {this.state.isLoading ? 
                <h2>Loading Products...</h2> :
                <div className="row">
               { this.state.products.map(product => (
                   <Product key={product.id} product={product}/>
                ))}
                </div>
                }
                
            </div>
            
         );
    }
}
 
export default Products;