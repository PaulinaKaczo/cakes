import React from "react";

function Prices() {
  return (
    <section id="prices" className="container">
      <div className="prices_wrapper">
        <div className="box prices_box">
          <h2 className="prices_title">Cennik</h2>
          <table className="prices_table">
            <thead>
              <tr>
                <th>Wielkość tortu</th>
                <th>Ilość porcji</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16 cm</td>
                <td>ok. 10 porcji</td>
                <td>od 200 zł</td>
              </tr>
              <tr>
                <td>18 cm</td>
                <td>ok. 15 porcji</td>
                <td>od 260 zł</td>
              </tr>
              <tr>
                <td>20 cm</td>
                <td>ok. 20 porcji</td>
                <td>od 320 zł</td>
              </tr>
              <tr>
                <td>22 cm</td>
                <td>ok. 25 porcji</td>
                <td>od 380 zł</td>
              </tr>
              <tr>
                <td>24 cm</td>
                <td>ok. 30 porcji</td>
                <td>od 440 zł</td>
              </tr>
            </tbody>
          </table>
          <div className="prices_info">
            <p>
              W cenie jest podstawowa dekoracja typu: beziki, makaroniki,
              kwiaty, słodycze, wydruk cukrowy, topper.
            </p>
            <ul>
              Dodatkowo płatne:
              <li>smak premium</li>
              <li>owoce poza sezonem</li>
              <li>alkohol miniaturka</li>
            </ul>
            <p>Podane ceny są cenami orientacyjnymi. </p>
            <p>
              Ostateczny koszt tortu może się różnić w zależności od ilości
              elementów dekoracji, dlatego każdy tort wyceniany jest
              indywidualnie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
