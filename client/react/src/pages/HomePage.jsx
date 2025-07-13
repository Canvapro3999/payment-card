import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏆</span>
            <span>Trusted by 50,000+ Customers</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-main">Premium Shopping</span>
            <span className="hero-title-sub">Experience</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover exceptional products with unmatched quality, lightning-fast delivery, and world-class customer service. 
            Your satisfaction is our priority.
          </p>
          
          <div className="hero-buttons">
            <Link to="/shop" className="cta-button primary">
              <span className="btn-icon">🛍️</span>
              Start Shopping Now
            </Link>
            <Link to="/shop" className="cta-button secondary">
              <span className="btn-icon">👀</span>
              Explore Collection
            </Link>
          </div>
          
         
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-icon">⭐</span>
            <span>Premium Quality</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⚡</span>
            <span>Fast Delivery</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">💎</span>
            <span>Exclusive Deals</span>
          </div>
        </div>
      </div>
      
      <Features />
      <Testimonials />
      
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Experience Premium Shopping?</h2>
          <p>Join thousands of satisfied customers and discover why we're the preferred choice for quality products.</p>
          <Link to="/shop" className="cta-button primary large">
            <span className="btn-icon">🎯</span>
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 