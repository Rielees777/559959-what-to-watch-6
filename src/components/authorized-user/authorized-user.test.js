import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import AuthorizedUser from './authorized-user';

it(`AuthorizedUser should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByAltText} = render(
      <Router history={history}>
        <AuthorizedUser />
      </Router>
  );
  const imageElement = getByAltText(`User avatar`);

  expect(imageElement).toBeInTheDocument();
});
