import React from 'react';
    import './Pricing.css';

    function Pricing() {
      const pricingPlans = [
        { tier: 'Free', price: '$0', features: ['Feature A', 'Feature B'] },
        { tier: 'Premium', price: '$9.99', features: ['Feature A', 'Feature B', 'Feature C'] },
      ];

      return (
        <section className="pricing">
          <div className="container">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3>{plan.tier}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );
    }

    export default Pricing;
