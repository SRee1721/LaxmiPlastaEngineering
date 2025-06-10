function HeroSection({ onViewWork, onContact }) {
  return (
    <div className="hero-section">
      <div className="about-us">
        <h2>Welcome to Laxmi Plasta Engineering</h2>
        <p>
          We are a dynamic team dedicated to delivering exceptional results
          <br />
          through innovative solutions and strategic thinking. Discover our
          <br /> journey and explore our impressive portfolio of work.
        </p>
        <div className="hero-button">
          <button onClick={onViewWork}>View Our Work</button>
          <button onClick={onContact}>Contact Us</button>
        </div>
      </div>
      <div className="abt-img">
        <img src="header-image.jpg" />
      </div>
    </div>
  );
}
export default HeroSection;
// <div className="hero-section">
//   <div className="hero-info">
//     <h2>Welcome to Our Business Portfolio</h2>
//     <p>
//       We are a dynamic team dedicated to delivering exceptional results
//       <br />
//       through innovative solutions and strategic thinking. Discover our
//       <br /> journey and explore our impressive portfolio of work.
//     </p>
//   </div>
//   <div className="hero-image">
//     <img id="header_img" src="public\header_image.png" />
//   </div>
// </div>
