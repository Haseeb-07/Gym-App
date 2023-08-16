import React, { useState } from 'react';
import logo from '../gymlogo.png';
import { FaSearch } from 'react-icons/fa';

const AppHeader = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg" position="sticky" top="0">
      <div className="container">
        <a className="navbar-brand" href="abc.com">
          <img src={logo} alt="Logo" height="82.72" width="154.27" className="mr-2" />
        </a>
        <button
          className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/classes">
                CLASSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-light ml-2 search-button"
                onClick={toggleSearch}
              >
                <FaSearch />
              </button>
            </li>
          </ul>
        </div>
        {isSearchOpen && (
          <div className="search-bar">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppHeader;
