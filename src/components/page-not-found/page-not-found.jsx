import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="movie-card">

      <header className="page-header">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <Link to="/">Вернуться на главную</Link>
        </div>
      </header>
      <h1>Страница не найдена!</h1>
    </section>
  );
};

export default PageNotFound;
