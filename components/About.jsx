{
  /* <div className="about-class">
      <section id="about">
        <h2>About Us</h2>
        <p>
          Laxmi Plasta Engineering provides you the best range of paper box,
          polycarbonate sheet, polycarbonate, electric water heater, disposable
          plate & pelican cases with effective & timely delivery.
        </p>
      </section>
    </div> */
}

function About() {
  return (
    <section className="about-us" id="about">
      <div className="about-head">
        <h3>About Us</h3>
        <p>
          Learn more about our company, values, and the dedicated team behind
          our success.
        </p>
      </div>
      <div className="about-info">
        <div className="about-desc">
          <h4>Our Engineering Excellence</h4>
          <p>
            As a leading hardware engineering company, we specialize in
            delivering comprehensive solutions to diverse industrial partners.
            Our expertise spans across multiple engineering disciplines,
            ensuring that we meet the unique requirements of each client with
            precision and reliability.
          </p>
          <p>
            We pride ourselves on being a trusted supplier and engineering
            partner, providing everything from raw materials to complete product
            development services. Our commitment to technical excellence and
            customer satisfaction drives every project we undertake
          </p>
          <section class="feature-grid">
            <div class="feature-item">
              <div class="feature-icon">⚙️</div>
              <h4>Technical Expertise</h4>
              <p>Advanced engineering solutions across multiple disciplines</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🤝</div>
              <h4>Partnership</h4>
              <p>Long-term relationships with industrial clients</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✅</div>
              <h4>Quality Assurance</h4>
              <p>Rigorous standards and compliance protocols</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">💡</div>
              <h4>Innovation</h4>
              <p>Continuous improvement and product development</p>
            </div>
          </section>
        </div>
        <div className="about-img">
          <img src="image.png" />
        </div>
      </div>

      <div className="about-features">
        <div className="about-mission">
          <h4>Our Mission</h4>
          <p>
            To deliver reliable, high-quality engineering solutions that add
            value to our clients' operations, while fostering innovation,
            technical excellence, and long-term partnerships across diverse
            industrial sectors.
          </p>
        </div>
        <div className="about-mission">
          <h4>Our Vision</h4>
          <p>
            To become a trusted industry leader in engineering services and
            product innovation, known for our commitment to quality,
            customer-centric approach, and continuous improvement in serving
            industrial partners worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
