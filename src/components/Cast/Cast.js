import React from 'react';

const Cast = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
