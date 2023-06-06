import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TasteDetails() {
  return (
    <section>
      <header>
        <div className="header_container">
          <div className="header_logo">
            <a href="#hero">
              {" "}
              <FontAwesomeIcon
                icon={faCakeCandles}
                style={{ marginRight: "15px", color: "lightpink" }}
              />
              Ciochowe Ciacho
            </a>
          </div>
        </div>
      </header>
      <div className="container taste_details_container">
        <div className="taste_details_wrapper">
          <div className="taste_list">
            <div className="taste_item ">
              <p className="taste_item_title">Śmietankowy z owocami</p>
              <p>
                Jasny biszkopt, nasączony cytrusowym ponczem z bitą śmietaną i
                owocami do wyboru (malina, jagoda, truskawka lub wiśnia) i
                kawałkami białej/mlecznej/ciemnej czekolady.
              </p>
            </div>
            <div className="taste_item ">
              <p className="taste_item_title">Czekoladowy z owocami</p>
              <p>
                Czekoladowy biszkopt, nasączony cytrusowym ponczem z
                czekoladowym kremem z mascarpone i owocami do wyboru (malina,
                jagoda, truskawka lub wiśnia).
              </p>
            </div>

            <div className="taste_item">
              <p className="taste_item_title">Malinowo-jagodowy</p>
              <p>
                Jasny biszkopt nasączony cytrusowym ponczem i przełożony musem
                malinowym i jagodowym oraz delikatnym kremem z mascarpone/bitej
                śmietany.
              </p>
            </div>
            <div className="taste_item">
              <p className="taste_item_title">Orzechowy</p>
              <p>
                Jasny biszkopt z orzechowym kremem z mascarpone z dodatkami
                michałków.
              </p>
            </div>
            <div className="taste_item">
              <p className="taste_item_title">Czarny las</p>
              <p>
                Czekoladowy biszkopt z kremem z mascarpone przełożony wiśniami.
              </p>
            </div>

            <div className="taste_item">
              <p className="taste_item_title">Rafaello</p>
              <p>
                Kokosowy biszkopt z kremem z białej czekolady oraz kokosowym
                kremem budyniowym z dodatkiem migdałów.
              </p>
            </div>
            <div className="taste_item">
              <p className="taste_item_title">Tiramisu</p>
              <p>
                Jasny biszkopt nasączony espresso oraz Amaretto z serkiem
                mascarpone.
              </p>
            </div>
            <div className="taste_item">
              <p className="taste_item_title">Snikers</p>
              <p>
                Czekoladowy biszkopt z czekoladowo-orzechowym kremem, batonikami
                snikers oraz toffee.
              </p>
            </div>

            <div className="taste_item">
              <p className="taste_item_title">Red Velvet</p>
              <p>
                Amerykański tort na czerwonych biszkoptach nasączonych
                cytrynowym ponczem z serkiem mascarpone.
              </p>
            </div>
          </div>
          <Link className="back_btn" to="/">
            Powrót
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TasteDetails;
