import { useState } from "react";
import { Button, TextField } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Wiadomość z formularza kontaktowego";
    const body = `Imię i nazwisko: ${name}\nEmail: ${email}\nNumer telefonu: ${number}\nWiadomość: ${message}`;

    const mailtoUrl = `mailto:ciochowe.ciacho@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="container">
      <div className="wrapper contact_wrapper">
        <div className="box contact_box">
          <div className="contact_box_text">
            <h2>Kontakt</h2>
            <p>Telefon:</p>
            <p>
              <a href="tel:+48503310942">
                <strong>503-310-942</strong>
              </a>
            </p>
            <p>E-mail:</p>
            <a href="mailto:ciochowe.ciacho@gmail.com">
              <strong>ciochowe.ciacho@gmail.com</strong>
            </a>
          </div>

          <form className="contact_form" onSubmit={handleSubmit}>
            <p>Masz pytanie? Nie krępuj się :) Napisz do mnie</p>
            <TextField
              fullWidth
              className="input"
              label="Imię i nazwisko"
              variant="outlined"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="Imię i nazwisko"
              color="grey"
              size="small"
            />
            <TextField
              fullWidth
              className="input"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Email"
              color="grey"
              size="small"
            />
            <TextField
              fullWidth
              className="input"
              label="Numer telefonu"
              variant="outlined"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="number"
              id="number"
              placeholder="Numer telefonu"
              color="grey"
              size="small"
            />
            <TextField
              fullWidth
              className="input"
              id={message}
              label="Wiadomość"
              multiline
              rows={4}
              defaultValue="Default Value"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder=" Napisz wiadomość..."
              color="grey"
              size="small"
            />
            <Button variant="contained" type="submit" color="grey">
              Wyślij
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
