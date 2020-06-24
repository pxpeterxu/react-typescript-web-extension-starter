import * as React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Hello } from '../component';

it('component renders', () => {
  const tree: ReactTestRendererJSON | null = renderer
    .create(<Hello />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
