import React from "react";

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top" >
        <div className="container">
          <a className="navbar-brand" href="/">
            Let Me Search
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
          >
            <span>
              <img
                src=""
                alt="img"
                className="rounded-circle"
                height={25}
                loading="lazy"
              />
            </span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
            style={{ backgroundColor: '#B2B2B2'}}
          >
            <div className="offcanvas-header">
              <h5 className="nav-item">Navigation</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item me-5">
                  <div>
                    <a
                      href="/"
                      className="btn btn-outline-primary mt-2 form-control d-flex px-sm-auto"
                      aria-current="page"
                      role="button"
                      style={{ padding: "5px 100px" }}
                    >
                      <span className="justify-content-centre">Search</span>
                    </a>
                  </div>
                </li>
                <li className="nav-item me-3 mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mb-2"
                  >
                    <a href="/" className="fs-4 mt-3s me-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chat-left-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      chat
                    </a>
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src=""
                      alt="img"
                      className="rounded-circle ms-2"
                      height={25}
                      loading="lazy"
                    />
                    <span className="ms-2">
                     User name
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Profile settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Account and security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
