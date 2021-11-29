import React from "react";

const GalleryItem = ({ img, title }) => {
  return (
    <>
      <div className="gallery-item">
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default GalleryItem;
