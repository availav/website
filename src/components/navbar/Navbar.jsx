import "./navbar.css";

function navbar() {
  return (
    <header id="header" className="fixed-top  gx-0 ">
      <nav className="navbar navbar-expand-lg navbar-transparent ">
        <div className="container-fluid gx-0">
          <a className="navbar-brand" href="#">
            Delicious
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Whyus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SEO
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Cloud computing
                    </a>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </div>
          <a href="#bookatable" className="book-a-table-btn " >Book a table</a>
        </div>
      </nav>
      
    </header>
  );
}

export default navbar;
