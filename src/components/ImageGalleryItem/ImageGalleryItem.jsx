import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, tags }) => {
    return (
        <GalleryItem>
            <GalleryItemImage src={picture} alt={tags} />
        </GalleryItem>
    );
}