import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/privacy">Privacy</Link>
        <Link to="/credits">Credits</Link>
      </div>
      <div className="footer-center">
        <img
          src="/images/logo.png"
          style={{ cursor: "pointer" }}
          alt="DBMS Logo"
          height="80"
        />
        <p>&copy; 2024 DIRECTION BLATER MERDEKA STUDIO. All rights reserved.</p>
      </div>
      <div className="social-links">
        <a
          href="https://x.com/dbms_creative"
          style={{ display: "inline-flex", flexDirection: "column", gap: "8px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/x.svg" alt="Twitter" height="24" />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/dbms_creative/"
          style={{ display: "inline-flex", flexDirection: "column", gap: "8px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/ig.svg" alt="Instagram" height="24" />
          <span>Instagram</span>
        </a>
        <a
          href="https://tako.id/dbms_creative"
          style={{ display: "inline-flex", flexDirection: "column", gap: "8px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/tako.svg" alt="Tako" height="24" />
          <span>Tako</span>
        </a>
      </div>
    </footer>
  );
}