import React, { useEffect, useState } from 'react';
import { ImagesContainer } from './Components/ImagesContainer/ImagesContainer';
import { Loader } from './Components/Loader/Loader';
import './App.css';

const App = () => {
    const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;
    const [totalPhotos, setTotalPhotos] = useState(5);

    const queryTerm = "healthy food"
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${totalPhotos}&query=${queryTerm}`;

    const [isLoading, setIsLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [photosLoaded, setPhotosLoaded] = useState(0);
    
    const getPhotosFromUrl = async (url) => {
        try {
            const response = await fetch(url);
            const fetchedData = await response.json();
            setPhotos(previousData => previousData.concat(fetchedData));
            setIsLoading(false);
        }catch(error) {
            console.log(error);
        }
    }

    const photoLoaded = () => {
        setPhotosLoaded(photosLoaded + 1);
        if (totalPhotos === photosLoaded) {
            setIsReady(true);
            setPhotosLoaded(0);
            setTotalPhotos(20);
        }
    }

    const fetchPhotosAfterScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && isReady) {
            setIsReady(false);
            setIsLoading(true);
            getPhotosFromUrl(apiUrl);
        }
    }
    useEffect(() => {
        getPhotosFromUrl(apiUrl);
    },[apiUrl])

    useEffect(() => {
      window.addEventListener("scroll", fetchPhotosAfterScroll);
    
      return () => {
        window.removeEventListener("scroll",fetchPhotosAfterScroll);
      }
    })
    
    return (
        <>
            <header>
                <h1>infinite scroll</h1>
                <h2>images by unsplash</h2>
            </header>
            {isLoading ? <Loader /> : <ImagesContainer photos={photos} photoLoaded={photoLoaded}/>}
        </>
        
    )
}

export default App;
