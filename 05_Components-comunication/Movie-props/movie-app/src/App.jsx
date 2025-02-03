import React from 'react';
import MovieList from './components/MovieList';

const movies = [
  {
    id: 1,
    title: 'Il padrino',
    director: 'Francis Ford Coppola',
    year: 1972,
    description: "Il padrino è un film del 1972 diretto da Francis Ford Coppola, basato sull'omonimo romanzo di Mario Puzo. Racconta la storia della famiglia mafiosa Corleone, guidata dal patriarca Don Vito, interpretato magistralmente da Marlon Brando.",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/it/thumb/4/40/Don_Vito_Corleone.jpg/1200px-Don_Vito_Corleone.jpg?20141224095137'
  },
  {
    id: 2,
    title: '007 Mai dire mai',
    director: 'Irvin Kershner',
    year: 1983,
    description: "Questa spy-story, remake di Agente 007 - Thunderball (Operazione tuono), vede Sean Connery nuovamente nei panni del famoso agente segreto britannico James Bond a 12 anni di distanza dalla sua ultima interpretazione in Agente 007 - Una cascata di diamanti.",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/it/b/b1/Mai_dire_mai.jpg'
  },
  {
    id: 3,
    title: 'Quei bravi ragazzi',
    director: 'Martin Scorsese',
    year: 1990,
    description: "Tratto dal romanzo Il delitto paga bene di Nicholas Pileggi, a sua volta basato sulle vicende del pentito Henry Hill, il film è stato scritto a quattro mani dallo stesso Pileggi e da Scorsese.",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/it/f/fe/Quei_bravi_ragazzi.jpg'
  }
];

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Lista dei Film</h1>
      <MovieList movies={movies} className="align-itemas-center" />
    </div>
  );
}

export default App;
