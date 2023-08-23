import React from "react";

export default function Navbar() {
  return (
    <>
      {/* <div className="row bg-dark text-white">
        <div className="col-md-2">logo</div>
        <div className="col-md-6">menus</div>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
