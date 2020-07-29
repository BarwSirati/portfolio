import React from "react";
import IconStar from "../../icons/IconStar";

function GalleryHead({ title }) {
  return (
    <>
      <h1 className="text-center font-size-5">{title}</h1>
      <div
        className="mx-auto text-center"
        style={{ display: "flex", position: "relative", marginTop: "30px" }}
      >
        <div className="w-50">
          <div className="line1"></div>
        </div>
        <IconStar />
        <div className="w-50">
          <div className="line2"></div>
        </div>
      </div>
    </>
  );
}

export default GalleryHead;
