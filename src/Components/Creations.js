import React from "react";
import GalleryItem from "./GalleryItem";
import desktopGalleryData from "./DesktopGalleryData";
import mobileGalleryData from "./MobileGalleryData";

const Creations = () => {
  const displayDesktopGalleryItem = () => {
    const data = desktopGalleryData;
    return data.map((item) => {
      return (
        <GalleryItem key={item.id} img={item.src.img} title={item.title} />
      );
    });
  };

  const displayMobileGalleryItem = () => {
    const data = mobileGalleryData;
    return data.map((item) => {
      return (
        <GalleryItem key={item.id} img={item.src.img} title={item.title} />
      );
    });
  };

  return (
    <>
      <section className="creation">
        <h2>our creations</h2>
        <button>see all</button>
        <div className="desktop-gallery">{displayDesktopGalleryItem()}</div>
        <div className="mobile-gallery">{displayMobileGalleryItem()}</div>
      </section>
    </>
  );
};

export default Creations;
