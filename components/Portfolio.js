import React from "react";
import Gallery from "../components/Gallery";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" style={{ padding: "20px" }}>
      <div className="container-fluid" style={{ marginTop: "-40px" }}>
        <h1 className="text-center font-size-5">Portfolio();</h1>
        <div
          className="mx-auto text-center"
          style={{ display: "flex", marginTop: "-30px" }}
        >
          <div className="w-50">
            <div className="line1"></div>
          </div>
          <div>
            <svg
              className="svg-inline--fa fa-star fa-w-18 mx-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg
              style={{ width: "40px", marginTop: "-18px" }}
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </div>
          <div className="w-50">
            <div className="line2"></div>
          </div>
        </div>
        <div
          className="p-10 mt-3 flex mx-auto"
          style={{ maxWidth: "980px", flexWrap: "wrap" }}
        >
          <div className="card mx-auto mt-3">
            <img src="logo.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-card">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
          <div className="card mx-auto mt-3">
            <img src="logo.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-card">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
          <div className="card  mx-auto mt-3">
            <img src="logo.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-card">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
          <div className="card mx-auto mt-3">
            <img src="logo.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-card">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
          <div className="card  mx-auto mt-3">
            <img src="logo.png" alt="Avatar" style={{ width: "100%" }} />
            <div className="container-card">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect &amp; Engineer</p>
            </div>
          </div>
          <Gallery></Gallery>
        </div>
      </div>
    </section>
  );
}
