import React, { useState } from 'react';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer at XYZ Corp.',
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    // Logic to handle profile update (could be API call or state update)
    alert('Profile Updated');
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
    <h3 className="text-center mb-4">Business Strategies for Aluminium Doors & Windows Fitting</h3>

    {/* Strategy 1 - Customization */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">1. Customization</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Tailored Solutions</h5>
              <p>
                We offer tailor-made aluminium doors and windows to meet your specific requirements, ensuring a perfect fit for your property.
                Our team works closely with clients to design products that fit their aesthetic, functionality, and budget needs.
              </p>
              <p className="text-muted">
                Whether you're looking for a sleek modern design or a traditional look, we have options to suit every style.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Wide Range of Designs</h5>
              <p>
                From custom-made sliding doors to large picture windows, our aluminium range is versatile and flexible.
                We offer both fixed and movable units, all customizable to meet the specific needs of your property.
              </p>
              <p className="text-muted">
                Our design consultants are available to discuss your requirements and offer personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 2 - Energy Efficiency */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">2. Energy Efficiency</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">High-Performance Thermal Insulation</h5>
              <p>
                Our aluminium doors and windows come with advanced thermal insulation properties that significantly reduce heat loss.
                This feature helps keep homes and commercial properties cool in the summer and warm in the winter, improving overall comfort.
              </p>
              <p className="text-muted">
                Energy-efficient aluminium frames, combined with double-glazing options, ensure that you maintain a consistent indoor temperature throughout the year.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Lower Energy Bills</h5>
              <p>
                By choosing energy-efficient aluminium products, you can reduce your energy bills by minimizing the need for heating and cooling.
                Our products are designed to maximize energy savings without compromising on style and durability.
              </p>
              <p className="text-muted">
                The use of low-emissivity glass and other energy-saving technologies make our windows and doors a smart investment for your home or office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 3 - Maintenance Services */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">3. Maintenance Services</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Routine Maintenance</h5>
              <p>
                Regular maintenance is key to ensuring that your aluminium doors and windows remain in top condition for years. We provide routine maintenance services that include cleaning, lubrication, and check-ups to ensure smooth operation.
              </p>
              <p className="text-muted">
                Our expert technicians will assess the condition of your doors and windows and perform necessary repairs or adjustments.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Repairs and Replacements</h5>
              <p>
                Should your aluminium windows or doors experience damage, we offer fast and reliable repair services.
                We also provide a wide range of replacement parts to ensure the longevity of your product.
              </p>
              <p className="text-muted">
                From weatherproofing seals to new hinges and locks, we can help you restore your doors and windows to their optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 4 - Eco-Friendly Practices */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">4. Eco-Friendly Practices</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Sustainable Materials</h5>
              <p>
                We use high-quality, recycled aluminium in the production of our windows and doors, reducing the environmental impact of manufacturing.
                Aluminium is a 100% recyclable material, making it a sustainable choice for your property.
              </p>
              <p className="text-muted">
                By choosing aluminium, you are investing in an environmentally friendly product that helps reduce waste and lower carbon footprints.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Reduced Environmental Impact</h5>
              <p>
                Our manufacturing processes are designed to minimize waste and energy consumption. We continuously evaluate and improve our methods to reduce our environmental impact.
                By choosing our products, you're supporting sustainability.
              </p>
              <p className="text-muted">
                Additionally, the long-lasting durability of aluminium products reduces the need for frequent replacements, which further contributes to environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 5 - Affordable Pricing */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">5. Affordable Pricing</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Cost-Effective Solutions</h5>
              <p>
                We offer competitive pricing on all our aluminium doors and windows, ensuring that our high-quality products are accessible to a wide range of customers.
                Whether you're outfitting a small home or a large commercial building, we have solutions that fit your budget.
              </p>
              <p className="text-muted">
                Our transparent pricing structure ensures that you know exactly what you're paying for, with no hidden costs or surprises.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Financing Options</h5>
              <p>
                For larger projects, we offer flexible financing options that allow you to spread out the cost of installation and materials.
                This enables customers to invest in quality aluminium windows and doors without worrying about upfront costs.
              </p>
              <p className="text-muted">
                Contact us for more details about our financing plans and how we can help you make your dream home a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 6 - Warranty and Support */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">6. Warranty and Support</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Comprehensive Warranty</h5>
              <p>
                We offer a comprehensive warranty on all our products, covering any defects in material or workmanship.
                Our customers can enjoy peace of mind knowing that their investment is protected.
              </p>
              <p className="text-muted">
                Our warranty is designed to ensure that your aluminium doors and windows remain in optimal condition for years to come.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Dedicated Customer Support</h5>
              <p>
                Our customer support team is available to assist with any questions or issues that may arise after installation.
                We offer timely and professional assistance to ensure that you're completely satisfied with your purchase.
              </p>
              <p className="text-muted">
                Whether you need advice on maintenance or have a question about your warranty, our team is always ready to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy 7 - Innovation and Technology */}
    <section className="strategy-section py-5 mb-4">
      <h4 className="text-center mb-3">7. Innovation and Technology</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Smart Features</h5>
              <p>
                Our aluminium windows and doors can be integrated with smart home systems, allowing you to control them remotely for added convenience and security.
                Features like automated opening/closing and integrated sensors make these products ideal for modern homes and businesses.
              </p>
              <p className="text-muted">
                Embrace the future with our technologically advanced aluminium solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Cutting-Edge Manufacturing</h5>
              <p>
                We invest in the latest technology and equipment to ensure that our aluminium doors and windows are produced to the highest standards of precision and durability.
              </p>
              <p className="text-muted">
                By utilizing advanced manufacturing techniques, we are able to deliver products that not only look great but also stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default Profile;
