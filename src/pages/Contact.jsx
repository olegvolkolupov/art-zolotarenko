import React, { useRef, useState } from "react";

import { FormattedMessage } from "react-intl";

import Alert from "react-bootstrap/Alert";

import emailjs from "@emailjs/browser";
import mailData from "../service/mailData";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import "./ContactStyles.css";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState(""); //"success" or "danger"
  const [alertText, setAlertText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        mailData.YOUR_SERVICE_ID,
        mailData.YOUR_TEMPLATE_ID,
        form.current,
        mailData.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setAlertVariant("success");
          setAlertText(
            <FormattedMessage
              id="contact.successAlert"
              defaultMessage="Message sent successfully! I'll contact you as soon as posible."
            />
          );
          setShowAlert(true);
          let elRef = e.target.elements;
          elRef.user_name.value = "";
          elRef.user_email.value = "";
          elRef.message.value = "";
        },
        (error) => {
          setAlertVariant("danger");
          setAlertText(
            (
              <FormattedMessage
                id="contact.errorAlert"
                defaultMessage="Some error. "
              />
            ) + error.text
          );
          setShowAlert(true);
        }
      );
  };

  return (
    <div className="contact">
      <h1>
        <FormattedMessage
          id="contact.title"
          defaultMessage="Send me a letter"
        />
      </h1>
      <Alert
        show={showAlert}
        variant={alertVariant}
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {alertText}
      </Alert>

      <Form ref={form} onSubmit={sendEmail}>
        <FloatingLabel
          label={<FormattedMessage id="contact.name" defaultMessage="Name" />}
        >
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="user_name"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label={<FormattedMessage id="contact.email" defaultMessage="Email" />}
        >
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="user_email"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label={
            <FormattedMessage id="contact.message" defaultMessage="Message" />
          }
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            name="message"
            required
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          <FormattedMessage id="contact.sendButton" defaultMessage="Send" />
        </Button>
      </Form>
    </div>
  );
}
