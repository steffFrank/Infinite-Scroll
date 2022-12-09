import React from "react";
import "./imagesContainer.css";

export const ImagesContainer = ({photos, photoLoaded}) => {
    const displayPhotos = () => {
        return photos.map((photo, index) => {
            return (
                <a 
                    key={index} 
                    href={photo.links.html} 
                    target="_blank" rel="noreferrer">
                    <figure>
                        <img  
                            src={photo.urls.regular}
                            alt={photo.alt_description} 
                            title={photo.alt_description}
                            onLoad={() => photoLoaded()}
                        />
                        <figcaption>Photo by {photo.user.name}</figcaption>
                    </figure>
                    
                </a>
            )
        })
    }
    return (
        <div className="img-container">
            {displayPhotos()}
        </div>
    )
}