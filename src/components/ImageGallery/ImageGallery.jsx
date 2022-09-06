import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryStyles } from './ImageGallery.styled';

export const ImageGallery = ({ images, onModalOpen }) => {
    return (
        <>
            <ImageGalleryStyles>
                {images.map(({id, webformatURL, tags}) => (
                    <ImageGalleryItem key={id} picture={webformatURL} tags={tags} onModalOpen={onModalOpen} />
                ))}
            </ImageGalleryStyles>
        </>
    )
}