import React, { useEffect, useState } from 'react';
import { ImagesContainer } from './Components/ImagesContainer/ImagesContainer';
import './App.css';

const App = () => {
    const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_KEY;
    const numberOfPhotos = 3;
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${numberOfPhotos}`;
    const [photos, setPhotos] = useState([]);

    const getPhotos = async (url) => {
        try {
            const response = await fetch(url);
            const fetchedData = await response.json();
            setPhotos(fetchedData);
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPhotos(apiUrl);
    },[apiUrl])

    return (
        <>
            <header>
                <h1>infinite scroll</h1>
                <h2>images by unsplash</h2>
            </header>
            <ImagesContainer photos={photos}/>
        </>
        
    )
}

export default App;
