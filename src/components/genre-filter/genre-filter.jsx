import React from 'react';
import {connect} from 'react-redux';
import {changeGenre} from '../../store/action';
import PropTypes from 'prop-types';

// 1. changeGenre нужно передать в компонент в виде пропса
// 2. changeGenre должно получить evt.target.textContent в качестве параметра - выбранного фильтра
// 3. убедится что выбранный жанр сохранился в redux хранилище используя console.log()
// 4. при помощи connect получить выбранный жанр в компоненте main-page
// 5. отфильтровать фильмы в компоненте main-page используя список фильмов и выбранный жанр из redux хранилища

const GenreFilter = (props) => {

  const {changeGenre} = props;
  const getGenre = (evt) => {
    return changeGenre(evt.target.textContent);
  };
  return (
    <ul
      onClick={getGenre}
      className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Kids & Family</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Thrillers</a>
      </li>
    </ul>
  );
};

GenreFilter.propTypes = {
  changeGenre: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(changeGenre(genre));
  }
});

export default connect(null, mapDispatchToProps)(GenreFilter);
