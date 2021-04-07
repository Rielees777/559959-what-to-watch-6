import React from 'react';
import {Link} from 'react-router-dom';
import Logotype from '../logotype/logotype';

const PageNotFound = () => {
  return (
    <section className="movie-card">

      <header className="page-header">
        <Logotype />

        <div className="user-block">
          <Link to="/">Вернуться на главную</Link>
        </div>
      </header>
      <h1>Страница не найдена!</h1>
    </section>
  );
};

export default PageNotFound;
