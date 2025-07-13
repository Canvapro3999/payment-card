import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="logo">
          <span className="logo-icon">🛍️</span>
          Premium Shop
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Shop
          </NavLink>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        
        <div className="navbar-actions">
          <NavLink to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 