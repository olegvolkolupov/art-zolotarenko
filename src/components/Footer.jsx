import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import "./FooterStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Ulickogo</p>
              <p>Lviv Ukraine</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2323-343-23
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              artist@domain.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the site</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsum
            totam, voluptates laborum molestiae quasi recusandae vel eligendi
            tempora dicta.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100044612930668"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://instagram.com/art.zolotarenko?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
