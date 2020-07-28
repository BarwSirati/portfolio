import React from "react";
import GalleryCard from "./GalleryCard";

function GalleryContent({ items }) {
  return (
    <div className="p-10  flex mx-auto box-gallery">
      {items.map((item, index) => (
        <GalleryCard key={index} item={item} />
      ))}
    </div>
  );
}

export default GalleryContent;
