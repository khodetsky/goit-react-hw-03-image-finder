import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, tags, onModalOpen }) => {
    return (
        <GalleryItem onClick={onModalOpen}>
            <GalleryItemImage src={picture} alt={tags} />
        </GalleryItem>
    );
}