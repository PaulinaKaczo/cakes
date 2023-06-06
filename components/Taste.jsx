import { Link } from "react-router-dom";

function Taste() {
  return (
    <section id="taste" className="container">
      <div className="wrapper taste_wrapper">
        <div className="box taste_box">
          <h2 className="taste_title">Smaki</h2>
          <p>
            Smak tortu tak naprawdę zależy od Ciebie i od Twoich preferencji.
            Każdy tort mogę wykonać z jasnym bądź ciemnym biszkoptem, a krem i
            dodatki to kwestia gustu. Lekkie torty z kremem z bitej śmietany ze
            świeżymy owocami, to klasyk, który nigdy się nie znudzi. Natomiast
            krem na bazie mascarpone stanowi bazę do wielu wyśmienitych smaków.
            Zainspiruj się sprawdzonymi połączeniami smaków bądź zaproponuj coś
            swojego :){" "}
          </p>
          <Link to="/taste">
            <b>Zobacz więcej...</b>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Taste;
