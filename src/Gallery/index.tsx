import { Photo } from "./types";
import React, { useState } from 'react';

import style from './index.module.scss';

interface WebGalleryProps {
    photos: Photo[],
}
export const WebGallery: React.FC<WebGalleryProps> = ({
    photos
}) => {
    if (!photos.length) {
        return null;
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    return (
        <div className={style.Gallery}>
            <div className={style.GalleryContainer}>
                <MainPhoto
                    prevPhoto={prevPhoto}
                    currentPhoto={currentPhoto}
                    nextPhoto={nextPhoto}
                    className={style.GalleryMainPhoto}
                />

                <Navigation
                    className={style.GalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>

            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.GalleryPreviewList}
            />
        </div>
    )
}
