import * as React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Popup } from '../component';

it('component renders', () => {
  const tree: ReactTestRendererJSON | null = renderer
    .create(<Popup />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
