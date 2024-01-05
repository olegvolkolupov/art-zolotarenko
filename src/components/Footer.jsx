import React from "react";

import { FormattedMessage } from "react-intl";

import home from "../assets/social/home.png";
import mail from "../assets/social/mail.png";
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
              <img src={viber} alt="viber" style={{ marginRight: "1rem" }} />
              <img
                src={whatsapp}
                alt="whatsapp"
                style={{ marginRight: "1rem" }}
              />
              <span className="nowrap">+38 067 909 27 85</span>
            </h4>
          </div>
          <div className="social">
            <a
              href="https://instagram.com/art.zolotarenko"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ marginRight: "1rem" }}
              />
            </a>
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
          </div>
        </div>
        <div className="right">
          <h4>
            <FormattedMessage
              id="footer.title"
              defaultMessage="About the site"
            />
          </h4>
          <p>
            <FormattedMessage
              id="footer.text"
              defaultMessage="This is the page of the Ukrainian artist Ella Zolotarenko, who works in the style of Petrykiv's painting."
            />
          </p>
          <p>
            <span className="nowrap">
              <FormattedMessage
                id="footer.copyright"
                defaultMessage="Copyright"
              />
              &copy; 2012-2024
            </span>{" "}
            <span className="nowrap">
              <FormattedMessage
                id="footer.artist"
                defaultMessage="Ella Zolotarenko"
              />
            </span>
          </p>
          <p>
            <FormattedMessage
              id="footer.rights"
              defaultMessage="All Rights Reserved"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
