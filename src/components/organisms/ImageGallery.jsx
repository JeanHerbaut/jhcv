import React from 'react';
import '../../styles/ImageGallery.scss';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image.caption} />
          <p className="caption">{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
