import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

function Nav() {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/nav-icon/apple.svg" alt="apple icon" />
        </div>

        <div className="nav-menu">
          <div className="nav-item">
            <p>David</p>
          </div>
          <div className="nav-item">
            <p>File</p>
          </div>
          <div className="nav-item">
            <p>Window</p>
          </div>
          <div className="nav-item">
            <p>Terminal</p>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="apple-icon">
          <img src="/nav-icon/wifi.svg" alt="wifi icon" />
        </div>
  <div className="nav-item">
            <DateTime />
          </div>
      </div>

    </nav>
  );
}

export default Nav;
