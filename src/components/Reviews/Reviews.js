import React from 'react';

import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id} className={styles.ReviewCard}>
            <div className={styles.imageSection}>
              <img
                src={review.author_details.avatar_path.slice(1)}
                alt={review.author}
              />
              <p>{review.author}</p>
            </div>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
