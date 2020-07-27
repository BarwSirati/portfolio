import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact  bg-white"
      style={{ padding: "20px" }}
    >
      <div className="container-fluid" style={{ marginTop: "-40px" }}>
        <h1 className="text-center font-size-5">Contact();</h1>
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
        <div style={{ display: "flex" }} className="mx-auto text-center">
          <div className="w-50">
            <div className="rounded1 ">
              <svg
                className="svg-inline--fa fa-mobile-alt fa-w-10 text-white phone-value"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="mobile-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                />
              </svg>
            </div>
          </div>
          <div className="w-50">
            <div className="rounded2 ">
              <svg
                className="svg-inline--fa fa-envelope fa-w-16 text-white mail-value"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", marginTop: "10px" }}
          className="mx-auto text-center"
        >
          <div className="w-50">
            <div className="phone">
              <h1 className="font-size-5-res">
                Phone <br /> 062-083-2788
              </h1>
            </div>
          </div>
          <div className="w-50">
            <div className="mail">
              <h1 className="font-size-5-res">
                Email <br />{" "}
                <a
                  href="mailto:sirati10546@gmail.com"
                  style={{ textDecortation: "none", color: "#000" }}
                >
                  sirati10546@gmail.com
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
