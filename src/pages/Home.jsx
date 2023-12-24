import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import web from "../assets/social/web.png";
import mail from "../assets/social/mail.png";
import viber from "../assets/social/viber.png";
import whatsapp from "../assets/social/whatsapp.png";
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";

import icon from "../assets/logo.png";
import artistFoto from "../img/artist/06.jpg";

import "./HomeStyles.css";

export default function Home(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <img
            alt=""
            src={icon}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Золотаренко Елла
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-success bg-gradient bg-opacity-50">
        <img className="artist-img" src={artistFoto} alt="Ella Zolotarenko" />
        <h4>Керівник та засновниця Творчої студії "Зернятко" (2012-2024рр)</h4>
        <p>
          <img
            className="social-img"
            src={web}
            alt="Web"
            style={{ marginRight: "1rem" }}
          />
          <a
            href="http://www.masterskyja.blogspot.com"
            target="_blank"
            rel="noreferrer"
          >
            www.masterskyja.blogspot.com
          </a>
        </p>
        <p>
          Художниця українського та етнічного розпису в петриківському стилі.
          <br />
          Елла Львів'янка, за фахом психолог, працює вчителем з 2012 року.
          <br />
          У своїй діяльності застосовує техніку петриківського розпису як
          арт-терапію та психокорекцію для дітей і дорослих.
          <br />
          Має безліч персональних виставок в Україні, та 16 за кордоном (Польща,
          Туреччина, Франція, Іспанія). Активно бере участь у різноманітних
          міжнародних конкурсах і пленерах. Проводить навчання індивідуально,
          колективно та онлайн.
        </p>
        <p>
          <span className="nowrap" style={{ marginRight: "1rem" }}>
            Творчість в соцмережах:
          </span>
          <span className="nowrap">
            <a
              href="https://www.facebook.com/profile.php?id=100044612930668"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-img"
                src={facebook}
                alt="Facebook"
                style={{ marginRight: "1.5rem" }}
              />
            </a>
            <a
              href="https://instagram.com/art.zolotarenko"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-img"
                src={instagram}
                alt="Instagram"
                style={{ marginRight: "1rem" }}
              />
            </a>
          </span>
        </p>
        <p>
          <img
            className="social-img"
            src={viber}
            alt="Viber"
            style={{ marginRight: "1rem" }}
          />
          <img
            className="social-img"
            src={whatsapp}
            alt="Whatsapp"
            style={{ marginRight: "1rem" }}
          />{" "}
          <span className="nowrap">+38 067 909 27 85</span>
        </p>
        <p>
          <img
            className="social-img"
            src={mail}
            alt="Email"
            style={{ marginRight: "2rem" }}
          />
          zolotarenkoella@gmail.com
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-info">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
