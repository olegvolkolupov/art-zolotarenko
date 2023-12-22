import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import mailData from "../service/mailData";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import "./ContactStyles.css";

export default function Contact() {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Send me a letter</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <FloatingLabel label="Name">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="user_name"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Email">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="user_email"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            name="message"
            required
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}
