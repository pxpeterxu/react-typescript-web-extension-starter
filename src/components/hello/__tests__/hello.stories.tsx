import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '@src/components/dev';
import { Hello } from '../component';

// // // //

storiesOf('Hello', module).add('renders', () => {
  return (
    <Story>
      <Hello />
    </Story>
  );
});
