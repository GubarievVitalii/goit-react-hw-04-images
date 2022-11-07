import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal'

class ImageGalleryItem extends Component {
    state = {
    showModal: false,
    };

    onModalShow = () => {
    this.setState({ showModal: true });
    };

    onModalClose = () => {
    this.setState({ showModal: false });
    };

    render() {
        const { url, alt, largeImageURL } = this.props;
        return (
            <>
                <li className={s.galleryItem}>
                    <img className={s.galleryItemImage} src={url} alt={alt} onClick={this.onModalShow}/>
                </li>
                {this.state.showModal && (<Modal largeImageURL={largeImageURL} alt={alt} onModalClose={this.onModalClose}/>)}
            </>
        )
    }
}

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;