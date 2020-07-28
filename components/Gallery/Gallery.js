import React from "react";
import GalleryHead from "./GalleryHead";
import GalleryContent from "./GalleryContent";

function Gallery({ id, title, items }) {
  return (
    <section
      id={id}
      className="portfolio"
      style={{ padding: "20px" }}
    >
      <div className="container-fluid">
        <GalleryHead title={title} />
        <GalleryContent items={items} />
      </div>
    </section>
  );
}

export default Gallery;
