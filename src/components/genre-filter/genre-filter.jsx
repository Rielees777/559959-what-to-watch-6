import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeGenre} from '../../store/action';
import {genres} from '../../const';

const GenreFilter = () => {
  const {currentFilter
  } = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  return (
    <ul
      className="catalog__genres-list">
      {genres.map((item, index) => (
        <li key={`genre${index}`} className={`catalog__genres-item ${item === currentFilter ? `catalog__genres-item--active` : ``}`}>
          <a
            onClick={() => {
              dispatch(changeGenre(item));
            }}
            href="#" className="catalog__genres-link">{item}</a>
        </li>
      ))}
    </ul>
  );
};


export default GenreFilter;
