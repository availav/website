 
    // <header id="header" className="fixed-top gx-0">
    //   <nav className="navbar navbar-expand-lg navbar-transparent">
    //     <div className="container-fluid gx-0">
    //       <Link className="navbar-brand" to="/">
    //         Delicious
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/about">About</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/events">Events</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/whyus">Why Us</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/contact-us">Contact</Link>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle"
    //               to="/services"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Services
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <Link className="dropdown-item" to="/services/web-development">Web Development</Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to="/services/seo">SEO</Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to="/services/cloud-computing">Cloud Computing</Link>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //       <a href="#bookatable" className="book-a-table-btn">Book a table</a>
    //     </div>
    //   </nav>
    // </header>
//   );
// }

// export default navbar;
import "./navbar.css";
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoReorderThree } from 'react-icons/io5';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header id="header" className="fixed-top gx-0">
//       <nav className="navbar navbar-expand-lg navbar-transparent">
//         <div className="container-fluid gx-0">
//           <Link className="navbar-brand" to="/">
//             Delicious
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNavbar}
//             aria-controls="navbarSupportedContent"
//             aria-expanded={isOpen ? "true" : "false"}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon">
//               <IoReorderThree className="tocky" />
//             </span>
//           </button>

//           <div
//             className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/events">
//                   Events
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/whyus">
//                   Whyus
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact-us">
//                   Contact
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Service
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Web development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       SEO
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#">
//                       Cloud computing
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <Link to="#bookatable" className="book-a-table-btn">
//             Book a table
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className="fixed-top gx-0">
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <div className="container-fluid gx-0">
          <a className="navbar-brand" href="/">
            Delicious
          </a>
          
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
            <IoReorderThree className="tocky" />
            </span>
          </button>
          
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"    href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/whyus">
                  Whyus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" to="#">
                      Web development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      SEO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      Cloud computing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="#bookatable" className="book-a-table-btn">
            Book a table
          </a>
        </div>
      </nav>
    </header>

    
  );
}

export default Navbar;
