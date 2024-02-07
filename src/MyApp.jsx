import React from 'react';
import backgroundMusic from './assets/musica.mp3';

const MyApp = () => {
  const audioStyle = {
    position: 'absolute',
    top: '-9999px',
    left: '-9999px',
  };

  return (
    <div>
      <audio autoPlay loop style={audioStyle}>
        <source src={backgroundMusic} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
     
    </div>
  );
};

export default MyApp;
