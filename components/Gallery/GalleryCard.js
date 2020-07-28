import React from "react";

function GalleryCard({ item }) {
  return (
    <div className="card mx-auto my-2">
      <img
        src={item}
        alt={item}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default GalleryCard;
