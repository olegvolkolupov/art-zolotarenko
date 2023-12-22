import React from "react";

import home from "../assets/social/home.png";
import mail from "../assets/social/mail.png";
import phone from "../assets/social/phone.png";
import viber from "../assets/social/viber.png";
import whatsapp from "../assets/social/whatsapp.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";

import "./FooterStyles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <img
              src={home}
              alt="adress"
              style={{ marginRight: "2rem", filter: "invert(1)" }}
            />
            <div>
              <p>Lviv Ukraine</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <img src={mail} alt="email" style={{ marginRight: "2rem" }} />
              zolotarenkoella@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <img
                src={phone}
                alt="phone"
                style={{ marginRight: "1rem", filter: "invert(1)" }}
              />
              <img src={viber} alt="viber" style={{ marginRight: "1rem" }} />
              <img
                src={whatsapp}
                alt="whatsapp"
                style={{ marginRight: "1rem" }}
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
              <img
                src={facebook}
                alt="facebook"
                style={{ marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://instagram.com/art.zolotarenko?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
