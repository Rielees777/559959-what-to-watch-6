import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Review = ({rating, comment, author, date}) => {
  const formatDate = dayjs(date).format(`MMMM DD, YYYY`);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default Review;
