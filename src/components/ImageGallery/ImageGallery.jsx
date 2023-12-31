import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [src, setSrc] = useState('');

  return (
    <>
      <ul className="ImageGallery">
        {images.map(image => {
          return (
            <ImageGalleryItem key={image.id} image={image} onClick={setSrc} />
          );
        })}
      </ul>
      {src && <Modal src={src} onClick={setSrc} />}
    </>
  );
};

export default ImageGallery;
