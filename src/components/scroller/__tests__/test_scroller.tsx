import * as React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Scroller } from '../component';

it('component renders', () => {
  const tree: ReactTestRendererJSON | null = renderer
    .create(<Scroller />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
