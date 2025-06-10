function Footer() {
  const newYear = new Date().getFullYear();

  return (
    <footer>
      {/* <div className="footer-container">
        <div className="footer-left">
          <h3>BUSINESS PORTFOLIO</h3>
          <p>
            We help businesses achieve their goals through innovative solutions
            and strategic thinking. Our team of experts is dedicated to
            delivering exceptional results.
          </p>
        </div>
        <div className="footer-right">
          <div className="links">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div> */}
      <div className="footer-bottom">
        © {newYear} Laxmi Plasta Engineering. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;

//   return <footer className="footer">©{newYear} Copy rights</footer>;
// }
// export default Footer;
