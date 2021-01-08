import React from "react";

function GalleryCard({ item }) {
  return (
    <div className="card mx-auto my-1">
      <img
        src={item.img}
        alt={item.img}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="content-box">
          <p >{item.title}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
