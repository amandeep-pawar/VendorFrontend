import React from "react";
import '../header/navbar.css'

function Navbar() {
  return (
    <div>
      <header>
        <div class="header-container">
          <div class="header-logo">Vendor Application</div>
          <nav>
            <ul class="header-nav">
              <li class="header-nav-item">
                <a href="/" class="header-nav-link">
                  Home
                </a>
              </li>
              <li class="header-nav-item">
                <a href="/" class="header-nav-link">
                  About
                </a>
              </li>
              <li class="header-nav-item">
                <a href="/" class="header-nav-link">
                 Features
                </a>
              </li>
              <li class="header-nav-item">
                <a href="/" class="header-nav-link">
                 Premium
                </a>
              </li>
              <li class="header-nav-item">
                <a href="/" class="header-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
