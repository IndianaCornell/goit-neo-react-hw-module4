import React from "react";
import clsx from "clsx";

import css from "./ImageCard.module.css";

const ImageCard = ({ photoName, likes, url, onClick }) => {
  return (
    <div className={clsx(css.photo_card)} onClick={onClick}>
      <img src={url} alt={photoName} className={clsx(css.photo_image)} />
      <p className={clsx(css.photo_description)}>Likes: {likes}</p>
    </div>
  );
};

export default ImageCard;
