import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem-image">
      <img
        src={image.webformatURL}
        alt=""
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

