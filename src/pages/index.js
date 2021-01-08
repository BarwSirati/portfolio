import React from "react";
import Link from "next/link";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import { Gallery } from "../components/";

import activities from "../data/activities.json"
import certificates from "../data/certificates.json"

export default function index() {
  return (
    <>
      <Profile />
      <Gallery id="activities" title="Activities();" items={activities} />
      <Gallery id="certificates" title="Certificates();" items={certificates} />
      <Contact />
    </>
  );
}
