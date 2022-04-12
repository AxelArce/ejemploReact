import React from 'react';
import Title from './Title';
import BuyForm from './BuyForm';

const movies = [
  {
    name: 'Avengers',
    available: 3,
  },
  {
    name: 'Terminator',
    available: 5,
  },
];

export default function App() {
  return (
    <React.Fragment>
      <Title>Películas</Title>

      {movies.map((movie) => (
        <BuyForm
          key={movie.name}
          movie={movie.name}
          available={movie.available}
        />
      ))}
    </React.Fragment>
  );
}
