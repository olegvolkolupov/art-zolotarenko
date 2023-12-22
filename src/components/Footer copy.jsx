import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaViber,
  FaWhatsapp,
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
              <p>Lviv Ukraine</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              zolotarenkoella@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaViber
                size={30}
                style={{ color: "#93f", marginRight: "1rem" }}
              />
              <FaWhatsapp
                size={30}
                style={{ color: "#0f0", marginRight: "1rem" }}
              />
              +38 067 909 27 85
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the site</h4>
          <p>
            This is the page of the Ukrainian artist Ella Zolotarenko, who works
            in the style of Petrykiv's painting.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100044612930668"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={30}
                style={{
                  color: "00f",
                  background: "#fff",
                  marginRight: "1rem",
                }}
              />
            </a>
            <a
              href="https://instagram.com/art.zolotarenko?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "f00", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
