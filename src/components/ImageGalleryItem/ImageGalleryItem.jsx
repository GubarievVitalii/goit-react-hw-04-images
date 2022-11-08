import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ url, alt, largeImageURL }) {

  const [showModal, setShowModal] = useState(false);

  const onModalShow = () => {
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <li className={s.galleryItem}>
        <img
          className={s.galleryItemImage}
          src={url}
          alt={alt}
          onClick={onModalShow}
        />
      </li>
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          alt={alt}
          onModalClose={onModalClose}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
