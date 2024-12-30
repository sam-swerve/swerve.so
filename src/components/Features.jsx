import React, { useState } from 'react';
    import './Features.css';

    function Features() {
      const [selectedFeature, setSelectedFeature] = useState(null);

      const features = [
        { title: 'Feature 1', description: 'Description for feature 1', image: 'https://via.placeholder.com/300' },
        { title: 'Feature 2', description: 'Description for feature 2', image: 'https://via.placeholder.com/300' },
        { title: 'Feature 3', description: 'Description for feature 3', image: 'https://via.placeholder.com/300' },
      ];

      const openModal = (feature) => {
        setSelectedFeature(feature);
      };

      const closeModal = () => {
        setSelectedFeature(null);
      };

      return (
        <section className="features">
          <div className="container">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" onClick={() => openModal(feature)}>
                <img src={feature.image} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          {selectedFeature && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h3>{selectedFeature.title}</h3>
                <p>{selectedFeature.description}</p>
              </div>
            </div>
          )}
        </section>
      );
    }

    export default Features;
