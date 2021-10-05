import * as Route from "constants/routes";
import logo from "images/logo_size.jpg";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Developed with <span>❤️</span> by <a href="#">Quajo Duke</a>
          </span>
        </strong>
      </div>
      <div className="footer-col-2"></div>
      <div className="footer-col-3">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <img
            alt="Footer logo"
            className="footer-logo"
            src={logo}
            style={{ height: 50, padding: 10 }}
          />
          <span>
            &copy;&nbsp;
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
