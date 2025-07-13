import React from 'react';
import { useCart } from '../context/CartContext';

// Product data
const sampleProducts = [
  { id: "1", name: "Basic T-Shirt", price: "15.00", category: "clothing"},
  { id: "2", name: "Premium Headphones", price: "120.00", category: "electronics"}, 
  { id: "3", name: "Designer Watch", price: "450.00", category: "accessories"},
  { id: "4", name: "Gourmet Coffee Set", price: "45.00", category: "food"},
  { id: "5", name: "Ergonomic Office Chair", price: "350.00", category: "furniture"}, 
  { id: "6", name: "Smartphone Pro", price: "950.00", category: "electronics"},
  { id: "7", name: "Leather Wallet", price: "60.00", category: "accessories"},
  { id: "8", name: "Yoga Mat", price: "0.53", category: "fitness"},
  { id: "9", name: "Laptop Pro", price: "1200.00", category: "electronics"}, 
  { id: "10", name: "Artisan Soap", price: "1.00", category: "beauty"}, 
];

const ShopPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>🛍️ Our Products</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage; 