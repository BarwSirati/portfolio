import React from "react";
import Link from "next/link";
import Contact from "../components/Contact";
import { Gallery } from "../components/";

const activities = [
  "activities/1.jpg",
  "activities/2.jpg",
  "activities/3.jpg",
  "activities/4.jpg",
  "activities/5.jpg",
  "activities/6.jpg",
  "activities/7.jpg",
  "activities/8.jpg",
  "activities/9.jpg",
  "activities/10.jpg",
  "activities/11.jpg",
  "activities/12.jpg",
  "activities/13.jpg",
  "activities/14.jpg",
  "activities/15.jpg",
  "activities/16.jpg",
  "activities/17.jpg",
  "activities/18.jpg",
];
const certificates = [
  "certificates/1.jpg",
  "certificates/1.jpg",
  "certificates/2.jpg",
  "certificates/4.jpg",
  "certificates/5.jpg",
  "certificates/6.jpg",
  "certificates/7.jpg",
  "certificates/8.jpg",
  "certificates/9.jpg",
  "certificates/10.jpg",
  "certificates/11.jpg",
  "certificates/12.jpg",
  "certificates/13.jpg",
  "certificates/14.jpg",
  "certificates/15.jpg",
  "certificates/16.jpg",
  "certificates/17.jpg",
  "certificates/18.jpg",
  "certificates/3.jpg",
];

export default function index() {
  return (
    <>
      <Gallery id="activities" title="Activities();" items={activities} />
      <Gallery id="certificates" title="Certificates();" items={certificates} />
      <Contact />
    </>
  );
}
