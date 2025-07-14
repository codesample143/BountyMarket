import React, { useEffect, useState } from 'react';
import './ProductList.css';

type Product = {
  username: string;
  link: string;
  price: number;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="product-loading">Loading...</div>;

  return (
    <div className="product-container">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <strong>{product.username}</strong> {product.link}  ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
