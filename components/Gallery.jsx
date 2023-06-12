function Gallery() {
  return (
    <section className="gallery_container">
      <div className="wrapper gallery_wrapper">
        <div className="box gallery_box">
          <h2 className="gallery_title">Galeria</h2>

          <div id="carouselExample" className="carousel slide gallery_photos">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../images/tort_urodzinowy.jpg"
                  className="d-block w-100 gallery_img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../images/chrzest.jpg"
                  className="d-block w-100 gallery_img"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../images/wieczor_panienski.PNG"
                  className="d-block w-100 gallery_img"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/*<div className="gallery_photos">*/}
          {/*  <img*/}
          {/*    className="gallery_img"*/}
          {/*    src="../images/tort_urodzinowy.jpg"*/}
          {/*    alt="Tort urodzinowy"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*    className="gallery_img"*/}
          {/*    src="../images/chrzest.jpg"*/}
          {/*    alt="Tort na chrzciny"*/}
          {/*  />*/}
          {/*  <img*/}
          {/*    className="gallery_img gallery_img--last"*/}
          {/*    src="../images/wieczor_panienski.PNG"*/}
          {/*    alt="Tort na wieczór panieński"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
