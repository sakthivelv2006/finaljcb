import React from 'react';

const Working = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (optional for your project)
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Working Page Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-100 h-100 p-4 bg-white"
        style={{ maxWidth: '1000px' }}
      >
        <h2 className="text-center mb-4">Aluminium Doors and Windows Fitting</h2>
        <p className="lead text-center mb-4">
          Welcome to our Aluminium Doors and Windows Fitting Services. We specialize in providing high-quality fitting solutions for both residential and commercial spaces.
        </p>

        {/* Services Section */}
        <section className="services-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Our Services</h3>
          <div className="row d-flex justify-content-center">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Custom Aluminium Doors</h4>
                  <p>We offer custom aluminium doors tailored to your needs, ensuring both durability and aesthetic appeal.</p>
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Window Fitting Services</h4>
                  <p>Our window fitting services are designed to provide excellent insulation and style, maximizing energy efficiency.</p>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Repairs and Maintenance</h4>
                  <p>We also provide repair and maintenance services to ensure the longevity of your aluminium doors and windows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">What Our Clients Say</h3>
          <div className="row d-flex justify-content-center">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>John Doe</h4>
                  <p>"The aluminium windows we installed were perfect! The team was professional and efficient. Highly recommended!"</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Jane Smith</h4>
                  <p>"We are thrilled with our new aluminium doors. They not only look great but also improve the security of our home."</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h4>David Brown</h4>
                  <p>"Excellent service! The team arrived on time and did a fantastic job fitting the aluminium windows in our office building."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section py-5 text-center w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3>Interested in Our Services?</h3>
          <p className="lead">Contact us today to schedule your aluminium door and window fitting service or to get a free quote.</p>
          <button className="btn btn-primary btn-lg">Get in Touch</button>
        </section>

        {/* Footer Section */}
        <section
          className="footer-section py-4 bg-dark text-white text-center w-100 h-100 p-4"
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          <p>&copy; 2025 Aluminium Fitting Services. All Rights Reserved.</p>
        </section>
      </form>
    </div>
  );
};

export default Working;
