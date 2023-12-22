import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import mailData from "../service/mailData";

import "./ContactStyles.css";

export default function Contact() {
  const form = useRef();

  const [send, setSend] = useState(false);

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
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        {/* <label>Subject</label> */}
        {/* <input type="text" name="user_subject"></input> */}
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
        />
        <button className="btn" type="submit">
          Send
        </button>
        {/* <input className="btn" type="submit" value="Send" /> */}
        <span>{send && "Thanks for contacting me"}</span>
      </form>
    </div>
  );
}
