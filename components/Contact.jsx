import { useState } from "react";
import { Button, TextField } from "@mui/material";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/functions";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //   // Uzyskanie dostępu do kolekcji wiadomości w Firebase Firestore
  //   const db = firebase.firestore();
  //   const messagesRef = db.collection("messages");
  //
  //   // Dodanie nowej wiadomości do kolekcji
  //   messagesRef
  //     .add({
  //       name: name,
  //       email: email,
  //       number: number,
  //       message: message,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //     .then(() => {
  //       console.log("Wiadomość została zapisana w Firebase Firestore.");
  //
  //       // Wyczyszczenie pól formularza
  //       setName("");
  //       setEmail("");
  //       setNumber("");
  //       setMessage("");
  //     })
  //     .catch((error) => {
  //       console.error("Wystąpił błąd podczas zapisywania wiadomości:", error);
  //     });
  //
  //   // Wywołanie funkcji Firebase na serwerze do wysłania wiadomości e-mail
  //   const sendContactEmail = firebase
  //     .functions()
  //     .httpsCallable("sendContactEmail");
  //   sendContactEmail({
  //     name: name,
  //     email: email,
  //     number: number,
  //     message: message,
  //   })
  //     .then((result) => {
  //       console.log("Wiadomość wysłana!", result);
  //     })
  //     .catch((error) => {
  //       console.error("Wystąpił błąd podczas wysyłania wiadomości:", error);
  //     });
  // };

  return (
    <section id="contact" className="container">
      <div className="contact_wrapper">
        <div className="box contact_box">
          <div className="contact_box_text">
            <h2>Kontakt</h2>
            <p>Telefon:</p>
            <p>
              <strong>503-310-942</strong>
            </p>
            <p>E-mail:</p>
            <strong>ciochowe-ciacho@gmail.com</strong>
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
            <Button variant="contained" form="submit" color="grey">
              Wyślij
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
