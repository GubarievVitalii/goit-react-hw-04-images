import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default function Modal({ largeImageURL, alt, onModalClose }) {

    const onModalCloseFn = event => {
        if (event.code === 'Escape' || event.currentTarget === event.target) {
            onModalClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onModalCloseFn);

        return () => {
            window.removeEventListener('keydown', onModalCloseFn);
        }
        // eslint-disable-next-line
    }, [])

  return (
    <div className={s.overlay} onClick={onModalCloseFn}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
