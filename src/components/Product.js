import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
    <div className="card col-4">
    <img src={product.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name} <span className="badge badge-success">{product.inStock} inStock</span></h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={`/products/${product.id}`} className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
)

export default Product;