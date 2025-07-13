import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Message({ content }) {
  return <div className="message">{content}</div>;
}

const CartPage = () => {
  const { cart, removeFromCart, clearCart, total, updateQuantity } = useCart();
  const [message, setMessage] = useState("");

  const initialOptions = {
    "client-id": import.meta.env.PAYPAL_CLIENT_ID,
    "enable-funding": "venmo",
    currency: "USD",
    components: "buttons",
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-page-header">
        <h1>🛒 Shopping Cart</h1>
        <p>You have {cartItemCount} items in your cart</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <div className="empty-cart-icon">🛍️</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/shop" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-section">
            <div className="cart-items-header">
              <h2>Cart Items ({cartItemCount})</h2>
              <button onClick={clearCart} className="clear-cart-btn" title="Clear all items">
                🗑️ Clear All
              </button>
            </div>
            
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-page-item">
                  <div className="cart-item-content">
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">${item.price} each</p>
                    </div>
                    
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="quantity-btn"
                          title="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="quantity-btn"
                          title="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="cart-item-total">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="remove-item-btn"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary-section">
            <div className="cart-summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal ({cartItemCount} items):</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span className="total-amount">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="checkout-section">
                <div className="checkout-header">
                  <h4>🔒 Secure Checkout</h4>
                  <div className="security-badges">
                    <span className="security-badge">🔐 SSL Secure</span>
                    <span className="security-badge">💳 PayPal Protected</span>
                  </div>
                </div>
                
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons
                    style={{
                      shape: "rect",
                      layout: "vertical",
                      color: "gold",
                      label: "paypal",
                    }}
                    createOrder={async () => {
                      const response = await fetch("/api/orders", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ cart }),
                      });
                      const orderData = await response.json();
                      if (orderData.id) return orderData.id;
                      const errorDetail = orderData?.details?.[0];
                      const errorMessage = errorDetail ? `${errorDetail.issue} ${errorDetail.description}` : JSON.stringify(orderData);
                      setMessage(`Could not initiate PayPal Checkout...${errorMessage}`);
                      throw new Error(errorMessage);
                    }}
                    onApprove={async (data) => {
                      const response = await fetch(`/api/orders/${data.orderID}/capture`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                      });
                      const orderData = await response.json();
                      const errorDetail = orderData?.details?.[0];
                      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                        return actions.restart();
                      } else if (errorDetail) {
                        setMessage(`${errorDetail.description} (${orderData.debug_id})`);
                        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
                      } else {
                        const transaction = orderData.purchase_units[0].payments.captures[0];
                        setMessage(`✅ Transaction ${transaction.status}: ${transaction.id}`);
                        clearCart();
                      }
                    }}
                    onError={(err) => {
                      setMessage(`❌ Sorry, your transaction could not be processed...${err}`);
                    }}
                  />
                </PayPalScriptProvider>
                
                {message && <Message content={message} />}
              </div>

              <div className="cart-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🚚</span>
                  <span>Free shipping on all orders</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🔒</span>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 