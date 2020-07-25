import React, { useState } from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/style.css";
import "../css/body.css";
import "../css/heading.css";

export default function CMApp({ Component }) {
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <meta property="og:image" content="logo.png" />

        <title>PORTFOLIO</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <Nav />
      <Header />
      <div className="container-fluid">
        <div className="p-3">
          <Component />
        </div>
      </div>
      <Footer />
    </div>
  );
}
