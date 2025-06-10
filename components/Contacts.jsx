// function Contact() {
//   return (
//     <div className="contact">
//       <div className="contact-head">
//         <h4>Contact Us</h4>
//         <p>
//           Ready to start your next project? Get in touch with us and let's
//           discuss how <br />
//           we can help you achieve your goals.
//         </p>
//       </div>
//       <div className="contact-desc">
//         <h5>Get In Touch</h5>

//         <div className="contact-details">
//           <div className="inner-contact-details">
//             <h6>Email</h6>
//             <p>laxmiplasta@gmail.com</p>
//           </div>
//           <div className="inner-contact-details">
//             <h6>Phone</h6>
//             <p>+91 99431 30020</p>
//           </div>
//           <div className="inner-contact-details">
//             <h6>Address</h6>
//             <p>
//               No:05, Balaji nagar,
//               5th Cross St
//               Perungalathur-6000 063
//               Tamil Nadu
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Contact;
// const ContactSection = () => {
//   return (
//     <section className="bg-gradient-to-b from-azure to-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-cobalt mb-2">
//           Get In Touch
//         </h2>
//         <p className="text-center text-gray-700 mb-12">
//           Ready to start your project? Contact us today for a consultation and
//           let’s bring your vision to life.
//         </p>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-semibold mb-4 text-cobalt">
//               Send Us a Message
//             </h3>
//             <form className="space-y-4">
//               <div className="flex flex-col md:flex-row md:space-x-4">
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="flex-1 border p-2 rounded-md"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 border p-2 rounded-md"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full border p-2 rounded-md"
//               />
//               <textarea
//                 placeholder="Your message"
//                 className="w-full border p-2 rounded-md h-28 resize-none"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-skyblue to-cobalt text-white px-6 py-2 rounded-md shadow hover:opacity-90"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-cobalt">
//               Contact Information
//             </h3>
//             <p className="text-gray-700">
//               We’d love to hear from you. Reach out to us through any of the
//               channels below or visit our office.
//             </p>

//             <div className="space-y-3 text-gray-800">
//               <div className="flex items-start">
//                 <span className="text-cobalt text-xl mr-3">📍</span>
//                 <div>
//                   <strong>Our Location</strong>
//                   <br />
//                   1234 Business Avenue, Suite 567
//                   <br />
//                   New York, NY 10001
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <span className="text-cobalt text-xl mr-3">📧</span>
//                 <div>
//                   <strong>Email Us</strong>
//                   <br />
//                   info@businessportfolio.com
//                   <br />
//                   support@businessportfolio.com
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <span className="text-cobalt text-xl mr-3">📞</span>
//                 <div>
//                   <strong>Call Us</strong>
//                   <br />
//                   +1 (555) 123-4567
//                   <br />
//                   +1 (555) 987-6543
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <p className="font-semibold text-cobalt mb-2">Connect With Us</p>
//               <div className="flex space-x-4 text-cobalt text-xl">
//                 <a href="#">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-20 bg-gradient-to-r from-cobalt to-skyblue text-white py-8">
//         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
//           <div>
//             <h4 className="font-bold text-lg mb-2">BUSINESS PORTFOLIO</h4>
//             <p className="text-sm">
//               We help businesses achieve their goals through innovative
//               solutions and strategic thinking.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-2">Quick Links</h4>
//             <ul className="text-sm space-y-1">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About Us</a>
//               </li>
//               <li>
//                 <a href="#">Works</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-2">Legal</h4>
//             <ul className="text-sm space-y-1">
//               <li>
//                 <a href="#">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#">Terms of Service</a>
//               </li>
//               <li>
//                 <a href="#">Cookie Policy</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="text-center mt-6 text-sm">
//           &copy; 2023 Business Portfolio. All rights reserved.
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default ContactSection;
import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-description">
        Ready to start your project? Contact us today for a consultation and
        let's bring your vision to life.
      </p>

      <div className="contact-container">
        <div className="contact-form-card">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            We’d love to hear from you. Reach out to us through any of the
            channels below or visit our office.
          </p>
          <ul>
            <li>
              <strong>📍 Our Location</strong>
              <br />
              No:05, Balaji nagar, 5th Cross St
              <br />
              Perungalathur-6000 063 Tamil Nadu
            </li>
            <li>
              <strong>✉️ Email Us</strong>
              <br />
              laxmiplasta@gmail.com
              <br />
            </li>
            <li>
              <strong>📞 Call Us</strong>
              <br />
              +91 99431 30020<br/>
              +91 93635 40020
            </li>
          </ul>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">💼</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
