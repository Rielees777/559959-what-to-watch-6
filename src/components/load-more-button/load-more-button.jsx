import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreButton = ({onClickLoadMoreButton}) => {
  return (
    <div className="catalog__more">
      <button
        onClick={onClickLoadMoreButton}
        className="catalog__button"
        type="button">Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onClickLoadMoreButton: PropTypes.func.isRequired
};
export default LoadMoreButton;
