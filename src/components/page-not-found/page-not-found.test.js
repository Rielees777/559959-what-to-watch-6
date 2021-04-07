import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PageNotFound from './page-not-found';

it(`PageNotFound should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <PageNotFound />
      </Router>
  );
  const headerElement = getByText(`Страница не найдена!`);
  const linkElement = getByText(`Вернуться на главную`);

  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
