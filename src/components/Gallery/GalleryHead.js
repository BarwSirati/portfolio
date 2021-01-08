import React from "react";
import IconStar from "../../icons/IconStar";

function GalleryHead({ title }) {
  return (
    <>
      <h1 className="text-center font-size-5">{title}</h1>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <IconStar />
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
}

export default GalleryHead;
