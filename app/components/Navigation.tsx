import { Link, useLocation } from "@remix-run/react";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <img src="/images/logo.png" style={{ cursor: "pointer" }} alt="logo" height="100" />
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
          Services
        </Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>
          Portfolio
        </Link>
        <Link to="/tos" className={location.pathname === "/tos" ? "active" : ""}>
          TOS
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
        <div style={{ position: "relative" }}>
          <span className="comms-label">
            Comms: <span style={{ color: "palevioletred" }}>Open</span>
          </span>
          <Link to="/order" className="order-btn">
            Order Here
          </Link>
        </div>
      </div>
    </nav>
  );
}