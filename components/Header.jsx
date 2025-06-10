function Header() {
  //   let list = {
  //     listStyle: "none",
  //     display: "flex",
  //     gap: "15px",
  //     margin: 0,
  //     padding: 0,
  //   };
  //   let header_style = {
  //     backgroundColor: "white", //Green
  //     border: "10px",
  //     borderRadius: "5px",
  //     color: "#black",
  //     padding: "10px 20px",
  //     display: "flex",
  //     justifyContent: "end",
  //     alignItems: "right",
  //     gap: "10px",
  //   };

  //   let list_item = { color: "black", textDecoration: "none" };
  return (
    <header>
      <div className="logo">
        <img src="logo.jpeg" alt="LPE logo" />
      </div>
      <div className="navbar">
        <a href="#">Home</a>

        <a href="#about">About Us</a>

        <a href="#work">Work</a>

        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}
export default Header;
