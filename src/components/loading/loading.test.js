import React from 'react';
import {render} from '@testing-library/react';
import Loading from './loading';

it(`Loading component should render correctly`, () => {
  const {getByText} = render(
      <Loading />
  );
  const textElement = getByText(`Loading ...`);

  expect(textElement).toBeInTheDocument();
});
