import { useState } from "react";

function Gallery() {
  const galleryPictures = [
    "../images/chrzest.jpg",
    "../images/tort_urodzinowy.jpg",
    "../images/wieczor_panienski.png",
    "../images/tort_urodzinowy2.jpg",
    "../images/tort_urodzinowy2_srodek.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryPictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryPictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="gallery_container">
      <div className="wrapper gallery_wrapper">
        <div className="box gallery_box">
          <h2 className="gallery_title">Galeria</h2>

          <div className="carousel gallery_photos">
            <div className="carousel">
              <button className="btn_change_slide" onClick={goToPreviousSlide}>
                &#8249;
              </button>
              <img
                className="gallery_img"
                src={
                  galleryPictures[
                    currentIndex === 0
                      ? galleryPictures.length - 1
                      : currentIndex - 1
                  ]
                }
                alt={`Cake nr ${currentIndex - 1}`}
              />
              <img
                className="gallery_img"
                src={galleryPictures[currentIndex]}
                alt={`Cake nr ${currentIndex}`}
              />
              <img
                className="gallery_img gallery_img--last"
                src={
                  galleryPictures[
                    currentIndex + 1 === galleryPictures.length
                      ? 0
                      : currentIndex + 1
                  ]
                }
                alt={`Cake nr ${currentIndex + 1}`}
              />

              <button className="btn_change_slide" onClick={goToNextSlide}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
