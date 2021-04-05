import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import GuestUser from './guest-user';

it(`GuestUser should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <GuestUser />
      </Router>
  );
  const textElement = getByText(`Sign in`);

  expect(textElement).toBeInTheDocument();
});
