import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreButton = ({onLoadMoreFilms}) => {
  return (
    <div className="catalog__more">
      <button
        onClick={onLoadMoreFilms}
        className="catalog__button"
        type="button">Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onLoadMoreFilms: PropTypes.func.isRequired
};
export default LoadMoreButton;
