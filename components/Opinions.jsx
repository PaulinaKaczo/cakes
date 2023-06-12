import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Opinions() {
  return (
    <section className="container opinions_container">
      <div className="wrapper opinions_wrapper">
        <div className="box opinions_box">
          <h2 className="opinions_title"> Opinie </h2>
          <div className="opinions_item">
            <p className="opinion_name"> Ania</p>
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <p>
              <cite className="opinion_text">
                "Anetka tort 1 klasa 20 na 10 :D Bardzo dziękuję! :)"
              </cite>
            </p>
          </div>
          <div className="opinions_item">
            <p className="opinion_name"> Ola</p>
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <p>
              <cite className="opinion_text">
                "Chciałabym baaardzoo podziękować Anetce za przepyszny tort!
                Naprawdę sztos!!! Wszyscy zajadali się i pytali skąd takie
                pyszności :D Już zamawiam na przyszły rok przynajmniej 3 torty:D
                Jeszcze raz bardzo dziękuję"
              </cite>
            </p>
          </div>
          <div className="opinions_item">
            <p className="opinion_name"> Agnieszka</p>
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <FontAwesomeIcon className="star_icon" icon={faStar} />
            <p>
              <cite className="opinion_text">"Tort przepyszny! :)"</cite>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opinions;
