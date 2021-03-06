import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour) => {
        const { id } = tour;
        return <Tour key={id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
