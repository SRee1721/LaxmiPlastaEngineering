// import Header from "/components/Header.jsx";
// import About from "/components/About.jsx";
// import HeroSection from "../components/Hero";
// import Card from "../components/Card";
// import Work from "../components/Works";
// import Contact from "/components/Contacts.jsx";
// import Footer from "../components/Footer";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       once: true, // animation only once on scroll
//     });
//   }, []);
//   return (
//     <div>
//       <Header data-aos="fade-down" />
//       <HeroSection data-aos="fade-up" />
//       <About data-aos="fade-up" />
//       <div className="work" data-aos="fade-left">
//         <Work />

//         <div className="work-name">
//           <Card
//             src="hero_img.png"
//             work="🧰 Tool Process Optimization"
//             desc="Correction and enhancement of tool-based workflows to ensure maximum efficiency and performance in production environments."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🏗️ Raw Material Supply as per Specification"
//             desc="Provision of high-grade raw materials strictly aligned with client specifications, ensuring consistency, compliance, and quality assurance."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="⚙️ Comprehensive Engineering Services"
//             desc="Execution of mechanical, electrical, and structural engineering tasks to meet diverse industrial and infrastructure demands."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🔍 Product Defect Analysis & Troubleshooting"
//             desc="In-depth analysis and resolution of product defects to improve reliability, reduce downtime, and extend product lifespan."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🧪 New Product Development & Innovation"
//             desc="Design and development of innovative new products — from initial concept to functional prototype and market-ready solution."
//             data-aos="zoom-in"
//           />
//         </div>
//       </div>
//       <Contact data-aos="fade-up" />
//       <hr />
//       <Footer />
//     </div>
//   );
// }

// export default App;
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Header from "/components/Header.jsx";
// import About from "/components/About.jsx";
// import HeroSection from "../components/Hero";
// import Card from "../components/Card";
// import Work from "../components/Works";
// import Contact from "/components/Contacts.jsx";
// import Footer from "../components/Footer";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);

//   return (
//     <div>
//       <Header data-aos="fade-down" />
//       <HeroSection data-aos="fade-up" />
//       <About data-aos="fade-right" />
//       <div className="work" data-aos="fade-left">
//         <Work />
//         <div className="work-name">
//           <Card
//             src="hero_img.png"
//             work="🧰 Tool Process Optimization"
//             desc="Correction and enhancement of tool-based workflows to ensure maximum efficiency and performance in production environments."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🏗️ Raw Material Supply as per Specification"
//             desc="Provision of high-grade raw materials strictly aligned with client specifications, ensuring consistency, compliance, and quality assurance."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="⚙️ Comprehensive Engineering Services"
//             desc="Execution of mechanical, electrical, and structural engineering tasks to meet diverse industrial and infrastructure demands."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🔍 Product Defect Analysis & Troubleshooting"
//             desc="In-depth analysis and resolution of product defects to improve reliability, reduce downtime, and extend product lifespan."
//             data-aos="zoom-in"
//           />
//           <Card
//             src="hero_img.png"
//             work="🧪 New Product Development & Innovation"
//             desc="Design and development of innovative new products — from initial concept to functional prototype and market-ready solution."
//             data-aos="zoom-in"
//           />
//         </div>
//       </div>
//       <Contact data-aos="fade-up" />
//       <hr />
//       <Footer data-aos="fade-down" />
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "/components/Header.jsx";
import About from "/components/About.jsx";
import HeroSection from "../components/Hero";
import Card from "../components/Card";
import Work from "../components/Works";
import ContactSection from "/components/Contacts.jsx";
import Footer from "../components/Footer";

function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow re-triggering
    });
  }, []);

  return (
    <div>
      <div>
        <Header data-aos="fade-left" />
      </div>
      <div>
        <HeroSection
          onViewWork={() => scrollToSection(workRef)}
          onContact={() => scrollToSection(contactRef)}
          data-aos="fade-left"
        />
      </div>

      <About data-aos="fade-left" />
      <div className="work" data-aos="fade-up" ref={workRef}>
        <Work />
        <div className="work-name">
          <Card
            src="img_1.png"
            work="🧰 Tool Process Optimization"
            desc="Correction and enhancement of tool-based workflows to ensure maximum efficiency and performance in production environments."
          />
          <Card
            src="img_2.png"
            work="🏗️ Raw Material Supply as per Specification"
            desc="Provision of high-grade raw materials strictly aligned with client specifications, ensuring consistency, compliance, and quality assurance."
          />
          <Card
            src="img_3.png"
            work="⚙️ Comprehensive Engineering Services"
            desc="Execution of mechanical, electrical, and structural engineering tasks to meet diverse industrial and infrastructure demands."
          />
          <Card
            src="img_4.png"
            work="🔍 Product Defect Analysis & Troubleshooting"
            desc="In-depth analysis and resolution of product defects to improve reliability, reduce downtime, and extend product lifespan."
          />
          <Card
            src="img_5.png"
            work="🧪 New Product Development & Innovation"
            desc="Design and development of innovative new products — from initial concept to functional prototype and market-ready solution."
          />
          <Card
            src="img_6.png"
            work="📈 Quality Control & Assurance"
            desc="Complete engineering solutions combining all our specialized services for comprehensive industrial project delivery.
          "
          />
        </div>
      </div>
      <div ref={contactRef}>
        <ContactSection data-aos="fade-left" />
      </div>
      <Footer data-aos="fade-left" />
    </div>
  );
}

export default App;
