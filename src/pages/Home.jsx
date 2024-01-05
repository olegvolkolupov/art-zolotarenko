import React from "react";

import { FormattedMessage } from "react-intl";

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
          <FormattedMessage id="home.title" defaultMessage="Ella Zolotarenko" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-success bg-gradient bg-opacity-50">
        <img className="artist-img" src={artistFoto} alt="Ella Zolotarenko" />
        <h4>
          <FormattedMessage
            id="home.h4"
            defaultMessage="Head and founder of Creative Studio"
          />{" "}
          &quot;
          <FormattedMessage id="home.h4.studio" defaultMessage="Zernyatko" />
          &quot;{" "}
          <FormattedMessage id="home.h4.years" defaultMessage="(2012-2024)" />
        </h4>
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
          <FormattedMessage
            id="home.p1"
            defaultMessage="Artist of Ukrainian and ethnic paintings in the Petrykiv style."
          />
          <br />
          <FormattedMessage
            id="home.p2"
            defaultMessage="Ella Lvivyanka, a psychologist by profession, has been working as a teacher since 2012."
          />
          <br />
          <FormattedMessage
            id="home.p3"
            defaultMessage="In his work, he uses the technique of Petrikovsky painting as art therapy and psychocorrection for children and adults."
          />
          <br />
          <FormattedMessage
            id="home.p4"
            defaultMessage="She has many personal exhibitions in Ukraine and 16 abroad (Poland, Turkey, France, Spain). She actively participates in various international competitions and plein airs. Conducts training individually, collectively and online."
          />
        </p>
        <p>
          <span className="nowrap" style={{ marginRight: "1rem" }}>
            <FormattedMessage
              id="home.social"
              defaultMessage="Creativity in social networks:"
            />
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
        <Button onClick={props.onHide}>
          <FormattedMessage id="home.closeButton" defaultMessage="Close" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
