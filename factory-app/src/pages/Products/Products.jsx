import React, { useState, useEffect } from 'react';
import './Products.css';
import { Link } from 'react-router-dom'; // 👈 Add this
import productData from "../../data/data";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Later: Replace this with MongoDB API call
    setProducts(productData);
  }, []);

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {/* 👇 Wrap the button in a Link */}
            <Link to={`/product/${product.id}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
