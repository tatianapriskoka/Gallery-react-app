
interface WebGalleryProps {

}
export const WebGallery: React.FC<WebGalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }
    return (
        <div>My Gallery</div>
    )
}
