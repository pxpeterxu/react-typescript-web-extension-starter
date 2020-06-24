import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '@src/components/dev';
import { Scroller } from '../component';

// // // //

storiesOf('Scroller', module).add('renders', () => {
  return (
    <Story>
      <Scroller />
    </Story>
  );
});
