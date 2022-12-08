import React from 'react';
import { imagesContainer } from './Components/ImagesContainer/ImagesContainer';
import './App.css';

const App = () => {
    return (
        <>
            <header>
                <h1>infinite scroll</h1>
                <h2>images by unsplash</h2>
            </header>
            <imagesContainer />
        </>
        
    )
}

export default App;
