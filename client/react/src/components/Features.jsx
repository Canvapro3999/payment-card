import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Fast & Free Shipping",
      description: "Free shipping on orders over $50. Get your products delivered within 2-3 business days."
    },
    {
      id: 2,
      icon: "🔒",
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security and encryption."
    },
    {
      id: 3,
      icon: "🔄",
      title: "Easy Returns",
      description: "30-day money-back guarantee. Return any item for a full refund, no questions asked."
    },
    {
      id: 4,
      icon: "💬",
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to help you with any questions."
    },
    {
      id: 5,
      icon: "⭐",
      title: "Premium Quality",
      description: "All our products are carefully selected and tested to ensure the highest quality standards."
    },
    {
      id: 6,
      icon: "🎁",
      title: "Loyalty Rewards",
      description: "Earn points with every purchase and unlock exclusive discounts and special offers."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose Us</h2>
          <p>We're committed to providing you with the best shopping experience possible</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 