import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <img
              src={review.author_details.avatar_path.slice(1)}
              alt={review.author}
            />
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
