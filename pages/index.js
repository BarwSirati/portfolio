import React from "react";
import Link from "next/link";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function index() {
  return (
    <>
      <Portfolio />
      <Contact />
    </>
  );
}
