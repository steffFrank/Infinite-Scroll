import React from "react";
import "./imagesContainer.css";

export const ImagesContainer = ({photos}) => {
    const displayPhotos = () => {
        return photos.map(photo => {
            return (
                <img  src={photo.urls.regular} key={photo.id} alt={photo.description} title={photo.description} />
            )
        })
    }
    return (
        <div className="img-container">
            {displayPhotos()}
        </div>
    )
}