import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import clsx from "clsx";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={clsx(css.photo_gallery_list)}>
      {photos.map((photo) => (
        <li key={photo.id} className={clsx(css.photo_gallery_item)}>
          <ImageCard
            photoName={photo.alt_description}
            url={photo.urls.small}
            likes={photo.likes}
            onClick={() => onImageClick(photo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
