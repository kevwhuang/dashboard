import React from 'react';

function AudioPlayer() {
    return (
        <audio loop loading="lazy">
            <source src="https://atxproducers.com/audio/b102-autumn-skies.mp3" type="audio/mpeg" />
        </audio>
    );
}

export default AudioPlayer;
