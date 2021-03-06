import React, { useState } from "react";
import Link from "next/link";
import Scrollspy from "react-scrollspy";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="navbar">
        <div className="nav-res mx-auto  display-flex">
          <div className="left-menu">
            <a href="#header">
              <h1
                className="font-size-1-res text-white"
                style={{ textDecoration: "none" }}
              >
                #include "Portfolio.h"
              </h1>
            </a>
          </div>

          <span
            className="font-size-3 hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </span>

          <div className="right-menu">
            <Scrollspy
              items={["profile", "activities", "certificates"]}
              currentClassName="active"
              className="inline-block"
            >
              <li className="inline-block li-item">
                <a href="#profile" className="font-size-1">
                  Profile();
                </a>
              </li>
              <li className="inline-block li-item">
                <a href="#activities" className="font-size-1">
                  Activities();
                </a>
              </li>
              <li className="inline-block li-item">
                <a href="#certificates" className="font-size-1">
                  Certificates();
                </a>
              </li>
            </Scrollspy>
          </div>
        </div>
      </div>

      <nav className={`side-drawer ${isOpen ? "open" : ""}`}>
        <div
          className="mx-auto text-center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <a
            href="#profile"
            style={{
              background: "#ff7c2c",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              textAlign: "center",
            }}
            className="font-size-3 mx-auto  my-1 text-white scale"
            onClick={() => setIsOpen(!isOpen)}
          >
            Profile();
          </a>
          <a
            href="#activities"
            style={{
              background: "#ff7c2c",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              textAlign: "center",
            }}
            className="font-size-3 mx-auto  my-1 text-white scale"
            onClick={() => setIsOpen(!isOpen)}
          >
            Activities();
          </a>
          <a
            href="#certificates"
            style={{
              background: "#ff7c2c",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              textAlign: "center",
            }}
            className="font-size-3 mx-auto  my-1 text-white scale"
            onClick={() => setIsOpen(!isOpen)}
          >
            Certificates();
          </a>
        </div>
        <div className="text-center mt-2">
          <button
            type="button"
            className="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="times-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "50px", color: "#dc3545" }}
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}
