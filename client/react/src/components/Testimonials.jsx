import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions",
      rating: 5,
      text: "The quality of products here is exceptional! Fast shipping and excellent customer service. I've been shopping here for months and never been disappointed.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateTech",
      rating: 5,
      text: "Amazing selection and competitive prices. The checkout process is seamless and secure. Highly recommend to anyone looking for quality products!",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Owner",
      company: "Creative Studios",
      rating: 5,
      text: "Outstanding experience! The products exceeded my expectations and the delivery was lightning fast. This is now my go-to online store.",
      avatar: "👩‍🎨"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Project Manager",
      company: "Global Solutions",
      rating: 5,
      text: "Professional service from start to finish. The website is user-friendly and the product descriptions are accurate. Will definitely shop here again!",
      avatar: "👨‍💼"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Design Consultant",
      company: "DesignHub",
      rating: 5,
      text: "Incredible quality and attention to detail. The customer support team was incredibly helpful when I had questions. Five stars all around!",
      avatar: "👩‍🎨"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Entrepreneur",
      company: "Startup Ventures",
      rating: 5,
      text: "Best online shopping experience I've had! Fast, reliable, and the products are exactly as described. This store has earned my trust completely.",
      avatar: "👨‍💼"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>Join thousands of satisfied customers who trust us for their shopping needs</p>
          <div className="overall-rating">
            <div className="rating-stars">
              {renderStars(5)}
            </div>
            <span className="rating-text">4.9 out of 5 from 2,847 reviews</span>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              
              <div className="testimonial-verified">
                <span className="verified-badge">✓ Verified Purchase</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.2%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Secure Shopping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 